import Response from '../../utils/response';
import { beforeExecute } from'./beforeExecute';
import { captureHeaders } from './captureHeaders';
import { catchError } from './catchError';

const appWrapper = ({ fn, schema }) => {
    async (event, context, callback) => {
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
                res
            });

            callback(null, res.toJSON());
        } catch (error) {
            const appError = catchError(error);
            const res = new Response(appError.toJSON());

            callback(null, res.toJSON());
        } finally {
        }
    };
};

export default appWrapper;
