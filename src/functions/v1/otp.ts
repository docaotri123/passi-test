import {
  Handler,
  APIGatewayEvent,
  Context,
  APIGatewayProxyResult
} from 'aws-lambda';
import appWrapper from '../../services/appWrapper';
import OTPService from '../../services/v1/otp';
import * as otpDtos from '../../dtos/v1/otp';
import { HttpStatus } from '../../services/appError';

const otpFns = {
  triggerSendOTP: async (
    event: APIGatewayEvent,
    context: Context,
    callback
  ) => {
    context.callbackWaitsForEmptyEventLoop = false;

    await OTPService.triggerSendOTP(event);

    callback(null, { body: JSON.stringify({ message: 'ok' }) });
  },
  resendOTP: async ({ event, res }) => {
    const { requestData } = event;
    const data = await OTPService.resendOTP(requestData);

    res.status(HttpStatus.Created).data(data);
  }
};

const triggerSendOTP: Handler = otpFns.triggerSendOTP;
const resendOTP: Handler = appWrapper({
  fn: otpFns.resendOTP,
  schema: otpDtos.resendOTP
});

export { resendOTP, triggerSendOTP };
