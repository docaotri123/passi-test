const appWrapper = require('../../services/appWrapper');
const OTPService = require('../../services/v1/otp');
const OTPDtos = require('../../dtos/v1/otp');
const { HttpStatus } = require('../../services/appError');

const otpFns = {
    triggerSendOTP: async (event, context, callback) => {
        context.callbackWaitsForEmptyEventLoop = false;

        await OTPService.triggerSendOTP(event);

        callback(null, { body: JSON.stringify({ message: 'ok' }) });
    },
    resendOTP: async ({ event, res }) => {
        const { requestData } = event;
        const data = await OTPService.resendOTP(requestData);

        res.status(HttpStatus.Created).data(data);
    },
};

module.exports = {
    triggerSendOTP: otpFns.triggerSendOTP,
    resendOTP: appWrapper({
        fn: otpFns.resendOTP,
        schema: OTPDtos.resendOTP,
        useMongoConnection: true,
    }),
};
