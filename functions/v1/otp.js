const OTPService = require('../../services/v1/otp');

const otpFns = {
    triggerSendOTP: async (event, context, callback) => {
        context.callbackWaitsForEmptyEventLoop = false;

        await OTPService.triggerSendOTP(event);

        callback(null, { body: JSON.stringify({ message: 'ok' }) });
    },
};

module.exports = {
    triggerSendOTP: otpFns.triggerSendOTP
};