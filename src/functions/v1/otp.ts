import {
  proxyHandler,
  requestFunction
} from '../../types/common';
import { appWrapper, triggerWrapper } from '../../services/appWrapper';
import OTPService from '../../services/v1/otp';
import * as otpDTO from '../../dtos/v1/otp';
import { HttpStatus } from '../../services/appError';

const otpService = new OTPService();

const otpFns = {
  triggerSendOTP: async ({ event, res }) => {
    const data = await otpService.triggerSendOTP(event);

    res.status(HttpStatus.Ok).data(data);
  },
  resendOTP: async (requestFunction: requestFunction) => {
    const { event, res } = requestFunction;
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

const triggerSendOTP: proxyHandler = triggerWrapper({
  fn: otpFns.triggerSendOTP
});

const resendOTP: proxyHandler = appWrapper({
  fn: otpFns.resendOTP,
  schema: otpDTO.resendOTP
});

const privateAPI: proxyHandler = appWrapper({
  fn: otpFns.privateAPI,
  schema: null
});

const sendOtpSQS: proxyHandler = triggerWrapper({
  fn: otpFns.sendOtpSQS
});

export { resendOTP, triggerSendOTP, privateAPI, sendOtpSQS };
