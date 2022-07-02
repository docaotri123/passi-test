const AppError = require('../appError');
const constant = require('../../utils/constant');
const OTPModel = require('../../models/otp');
const UserModel = require('../../models/user');
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
        log('triggerSendOTP');

        await createMongoConnection();

        switch (type) {
            case OPT_TYPE.SIGN_UP: {
                const now = momentUtils.getMoment();
                const expiredAfterHour = momentUtils.addTime(
                    now,
                    'h',
                    OTP_SIGN_UP_EXPIRED
                );
                const expiredAt = momentUtils.getFormat(expiredAfterHour, 'x');
                // const otp = generateOTP(4);

                await sendOTPWhenSignup({ ...body, type, expiredAt });

                break;
            }
            default:
                break;
        }
    } catch (error) {
        log('triggerSendOTP Error: ', error);
        log('haha');
    } finally {
        await closeMongoConnection();
    }
};

module.exports.resendOTP = async ({ phone, type }) => {
    const user = await UserModel.findOne({ phone }).exec();
    const now = momentUtils.getMoment();
    const expiredAfterHour = momentUtils.addTime(now, 'h', OTP_SIGN_UP_EXPIRED);
    const expiredAt = momentUtils.getFormat(expiredAfterHour, 'x');
    const { OPT_TYPE } = constant;
    let otpResult = null;

    if (!user) {
        return AppError.UserNotFound();
    }

    await OTPModel.updateMany(
        {
            status: false,
            expiredAt: { $gt: now },
            usageCount: { $gt: 0 },
            type,
            phone,
        },
        {
            status: true,
        }
    );

    const otp = '111111';

    switch (type) {
        case OPT_TYPE.SIGN_UP: {
            otpResult = await OTPModel.create({
                userId: user.userId,
                phone,
                code: otp,
                type,
                expiredAt,
            });

            break;
        }
        default:
            break;
    }

    return otpResult._id;
};

const sendOTPWhenSignup = async ({
    userId,
    phone,
    type,
    expiredAt,
    otp = '111111',
}) => {
    // const params = {
    //     Message: `Tri Do code: ${otp}`,
    //     PhoneNumber: phone,
    // };
    // const result = await sendMessage(params);
    const otpResult = await OTPModel.create({
        userId,
        phone,
        code: otp,
        type,
        expiredAt,
    });

    return otpResult._id;
};
