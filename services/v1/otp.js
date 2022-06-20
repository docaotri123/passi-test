const constant = require('../../utils/constant');
const otpModel = require('../../models/otp');
const momentUtils = require('../../utils/moment');
const { OTP_SIGN_UP_EXPIRED } = require('../../config');
const { generateOTP } = require('../../utils/random');

module.exports.triggerSendOTP = async (body) => {
    const { type } = body;
    const { OPT_TYPE } = constant;
    
    switch (type) {
        case OPT_TYPE.SIGN_UP: {
            const now = momentUtils.getMoment();
            const expiredAfterHour = momentUtils.addTime(now, 'h', OTP_SIGN_UP_EXPIRED);
            const expiredAt = momentUtils.getFormat(expiredAfterHour, 'x');
            const otp = generateOTP(4);

            return sendOTPWhenSignup({ ...body, type, expiredAt, otp });
        }
        default:
            break;
    }
}

const sendOTPWhenSignup = async ({ userId, phone, type, expiredAt, otp }) => {
    const otp = await otpModel.create({
        userId,
        phone,
        code: otp,
        type,
        expiredAt
    });

    return otp._id;
}