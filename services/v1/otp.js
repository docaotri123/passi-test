const constant = require('../../utils/constant');
const otpModel = require('../../models/otp');
const momentUtils = require('../../utils/moment');
const { OTP_SIGN_UP_EXPIRED } = require('../../config');
// const { generateOTP } = require('../../utils/random');
// const { sendMessage } = require('../../shared/aws/sns');
const { createMongoConnection, closeMongoConnection } = require('../../models');
const { log } = require('../../utils/logging');

module.exports.triggerSendOTP = async (body) => {
    try {
        const { type } = body;
        const { OPT_TYPE } = constant;

        await createMongoConnection();

        switch (type) {
            case OPT_TYPE.SIGN_UP: {
                const now = momentUtils.getMoment();
                const expiredAfterHour = momentUtils.addTime(now, 'h', OTP_SIGN_UP_EXPIRED);
                const expiredAt = momentUtils.getFormat(expiredAfterHour, 'x');
                // const otp = generateOTP(4);

                return sendOTPWhenSignup({ ...body, type, expiredAt });
            }
            default:
                break;
        }
    } catch (error) {
        console.log('triggerSendOTP Error: ', error);
        console.log('haha');
    } finally {
        await closeMongoConnection();
    }
}

const sendOTPWhenSignup = async ({ userId, phone, type, expiredAt, otp = '1111' }) => {
    // const params = {
    //     Message: `Tri Do code: ${otp}`,
    //     PhoneNumber: phone,
    //     Subject: 'TriDo'
    // };
    // const result = await sendMessage(params);
    const otpResult = await otpModel.create({
        userId,
        phone,
        code: otp,
        type,
        expiredAt
    });

    return otpResult._id;
}