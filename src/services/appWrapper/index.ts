import { APIGatewayEvent, Context } from "aws-lambda";
import Response from "../../utils/response";
import { beforeExecute } from "./beforeExecute";
import { captureHeaders } from "./captureHeaders";
import { catchError } from "./catchError";

const appWrapper =
  ({ fn, schema }) =>
  async (event: APIGatewayEvent, context: Context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
      const res = new Response({});
      const { event: _event } = await beforeExecute({
        schema,
        event,
      });

      captureHeaders(_event);
      await fn({
        event: _event,
        context,
        res,
      });

      callback(null, res.toJSON());
      // return res.toJSON();
    } catch (error) {
      const appError = catchError(error);
      const res = new Response(appError.toJSON());

      // callback(null, res.toJSON());
      return res.toJSON();
    }
  };

const triggerWrapper =
  ({ fn }) =>
  async (event: APIGatewayEvent, context: Context, callback) => {
    console.log("haha");

    context.callbackWaitsForEmptyEventLoop = false;

    try {
      const res = new Response({});

      await fn({
        event,
        context,
        res,
      });

      // callback(null, res.toJSON());
      return res.toJSON();
    } catch (error) {
      console.log("err: ", error);

      const appError = catchError(error);
      const res = new Response(appError.toJSON());

      // callback(null, res.toJSON());
      return res.toJSON();
    }
  };

export { appWrapper, triggerWrapper };
