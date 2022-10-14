const { Response } = require("../../utils/response");
const { beforeExecute } = require("./beforeExecute");
const { captureHeaders } = require("./captureHeaders");
const { catchError } = require("./catchError");
const { closeConnection } = require('../../shared/prisma');

const appWrapper =
  ({ fn, schema, coerceTypes = true }) =>
    async (event, context) => {
      context.callbackWaitsForEmptyEventLoop = false;
      try {
        const res = new Response({});

        if (event['source'] === 'serverless-warmup') {
          console.log('WarmUP - Lambda is warm!')
          return {
            statusCode: 200,
            body: JSON.stringify({ message: 'ok' })
          };
        }

        const { event: _event } = await beforeExecute({
          schema,
          event,
          coerceTypes
        });

        captureHeaders(_event);
        await fn({
          event: _event,
          context,
          res,
        });

        return res.toJSON();
      } catch (error) {
        const appError = catchError(error);
        const res = new Response(appError.toJSON());

        return res.toJSON();
      } finally {
        closeConnection();
      }
    };

const triggerWrapper =
  ({ fn }) =>
    async (event, context) => {
      context.callbackWaitsForEmptyEventLoop = false;
      try {
        const res = new Response({});

        if (event['source'] === 'serverless-warmup') {
          console.log('WarmUP - Lambda is warm!')
          return {
            statusCode: 200,
            body: JSON.stringify({ message: 'ok' })
          };
        }

        await fn({
          event,
          context,
          res,
        });

        return res.toJSON();
      } catch (error) {
        console.log("err: ", error);

        const appError = catchError(error);
        const res = new Response(appError.toJSON());

        return res.toJSON();
      } finally {
        closeConnection();
      }
    };

module.exports = { appWrapper, triggerWrapper };
