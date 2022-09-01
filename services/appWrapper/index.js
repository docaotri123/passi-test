const Response = require('../../utils/response');
const beforeExecute = require('./beforeExecute');
const captureHeaders = require('./captureHeaders');
const catchError = require('./catchError');
const { createConnection, closeConnection } = require('../../shared/prisma');

module.exports =
    ({ fn, schema }) =>
    async (event, context, callback) => {
        context.callbackWaitsForEmptyEventLoop = false;

        try {
            const res = new Response();
            const { event: _event } = await beforeExecute({
                schema,
                event,
            });

            captureHeaders(_event);
            await fn({
                event: _event,
                context,
                res,
                connection: null,
            });

            callback(null, res.toJSON());
        } catch (error) {
            const appError = catchError(error);
            const res = new Response(appError.toJSON());

            callback(null, res.toJSON());
        } finally {
        }
    };
