const AppError = require('../appError');
const constant = require('../../utils/constant');
const momentUtils = require('../../utils/moment');
const { OTP_SIGN_UP_EXPIRED, NOREPLY_EMAIL } = require('../../config');
// const { generateOTP } = require('../../utils/random');
// const { sendMessage } = require('../../shared/aws/sns');
const { log } = require('../../utils/logging');
const { createConnection, closeConnection } = require('../../shared/prisma');
// const { PrismaClient } = require('../../prisma/node_modules/.prisma/client');

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
    // const user = await UserModel.findOne({ phone }).exec();
    // const now = momentUtils.getMoment();
    // const expiredAfterHour = momentUtils.addTime(now, 'h', OTP_SIGN_UP_EXPIRED);
    // const expiredAt = momentUtils.getFormat(expiredAfterHour, 'x');
    // const { OPT_TYPE } = constant;
    // let otpResult = null;
    // if (!user) {
    //     return AppError.UserNotFound();
    // }
    // await OTPModel.updateMany(
    //     {
    //         status: false,
    //         expiredAt: { $gt: now },
    //         usageCount: { $gt: 0 },
    //         type,
    //         phone,
    //     },
    //     {
    //         status: true,
    //     }
    // );
    // const otp = '111111';
    // switch (type) {
    //     case OPT_TYPE.SIGN_UP: {
    //         otpResult = await OTPModel.create({
    //             userId: user.userId,
    //             phone,
    //             code: otp,
    //             type,
    //             expiredAt,
    //         });
    //         break;
    //     }
    //     default:
    //         break;
    // }
    // return otpResult._id;

    const result = await testPrisma();
    return { data: result };
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

const testPrisma = async () => {
    try {
        console.log('test prisma');
        const prisma = createConnection();
        // const random = Math.floor(Math.random() * 1000);

        // await prisma.user.create({
        //     data: {
        //       name: `Rich${random}`,
        //       email: `hello${random}@prisma.com`,
        //       posts: {
        //         create: {
        //           title: 'My first post',
        //           body: 'Lots of really interesting stuff',
        //           slug: 'my-first-post',
        //         },
        //       },
        //     },
        //   })

        const allUsers = await prisma.user.findMany();

        await closeConnection();

        return [...allUsers];
    } catch (err) {
        console.log('testPrisma error:', err);

        throw err;
    }
};
