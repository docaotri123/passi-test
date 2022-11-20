import { APIGatewayEvent, Context } from "aws-lambda";
import Response from "../../utils/response";
import { beforeExecute } from "./beforeExecute";
import { captureHeaders } from "./captureHeaders";
import { catchError } from "./catchError";
import { closeConnection } from '../../shared/prisma'

const appWrapper =
  ({ fn, schema, coerceTypes = true }) =>
    async (event: APIGatewayEvent, context: Context) => {
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
        console.log('err: ', error);
        const appError = catchError(error);
        const res = new Response(appError);

        return res.toJSON();
      } finally {
        closeConnection();
      }
    };

const triggerWrapper =
  ({ fn }) =>
    async (event: APIGatewayEvent, context: Context) => {
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
        const res = new Response(appError);

        return res.toJSON();
      } finally {
        closeConnection();
      }
    };

export { appWrapper, triggerWrapper };
