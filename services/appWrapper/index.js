const Response = require('../../shared/utils/response');
const beforeExecute = require('./beforeExecute');
const afterExecute = require('./afterExecute');
const captureHeaders = require('./captureHeaders');
const catchError = require('./catchError');

module.exports = ({ fn, schema, useMongoConnection }) => async (
    event,
    context,
    callback
) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        const res = new Response();
        const { event: _event } = await beforeExecute({
            schema,
            event,
            useMongoConnection,
        });

        captureHeaders(_event);
        await fn({ event: _event, context, res });

        callback(null, res.toJSON());
    } catch (error) {
        const appError = catchError(error);
        const res = new Response(appError.toJSON());

        callback(null, res.toJSON());
    } finally {
        await afterExecute({ useMongoConnection });
    }
};
