import {
  Handler,
  // APIGatewayEvent,
  // Context,
} from 'aws-lambda';
import { appWrapper, triggerWrapper } from '../../services/appWrapper';
import OTPService from '../../services/v1/otp';
import * as otpDtos from '../../dtos/v1/otp';
import { HttpStatus } from '../../services/appError'

const otpService = new OTPService();

const otpFns = {
  triggerSendOTP: async ({ event, res }) => {
    const data = await otpService.triggerSendOTP(event);

    res.status(HttpStatus.Ok).data(data);
  },
  resendOTP: async ({ event, res }) => {
    const { requestData } = event;
    const data = await otpService.resendOTP(requestData);

    res.status(HttpStatus.Created).data(data);
  },
  privateAPI: async ({ event, res }) => {
    const { requestData } = event;
    const data = otpService.privateAPI();

    res.status(HttpStatus.Ok).data(data);
  },
  sendOtpSQS: async ({ event, res }) => {
    const data = await otpService.sendOtpSQS(event.Records);

    res.status(HttpStatus.Ok).data(data);
  },
};

const triggerSendOTP: Handler = triggerWrapper({
  fn: otpFns.triggerSendOTP
});

const resendOTP: Handler = appWrapper({
  fn: otpFns.resendOTP,
  schema: otpDtos.resendOTP
});

const privateAPI: Handler = appWrapper({
  fn: otpFns.privateAPI,
  schema: null
});

const sendOtpSQS: Handler = triggerWrapper({
  fn: otpFns.sendOtpSQS
});

export { resendOTP, triggerSendOTP, privateAPI, sendOtpSQS };
