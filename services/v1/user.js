const AppError = require('../appError');
const { CognitoIdentityServiceProvider } = require('../../shared/aws/cognito');
const { log } = require('../../utils/logging');
const { invoke } = require('../../shared/aws/lambda');
const constant = require('../../utils/constant');
const UserModel = require('../../models/user');
const OTPModel = require('../../models/otp');

module.exports.signUp = async ({
    phone,
    password,
}) => {
    const { OPT_TYPE } = constant;
    const user = await UserModel.findOne({ phone }).exec();

    if (user) {
        return AppError.UserPhoneExists();
    }

    const { data: userId } = await CognitoIdentityServiceProvider.signUp({
        username: phone,
        password,
    });
    const userCreated = await UserModel.create({
        userId,
        phone
    })

    await invoke({
        body: { userId, phone, type: OPT_TYPE.SIGN_UP },
        functionName: `${process.env.FUNCTION_PREFIX}-2triggerSendOTP`,
    });

    return userCreated._id;
}

module.exports.signIn = async ({ phone, password }) => {
    try {
        const [user, result] = await Promise.all([
            UserModel.findOne({ phone, isVerified: true }).exec(),
            CognitoIdentityServiceProvider.initiateAuth(
                {
                    username: phone,
                    password,
                }
            )
        ]);
        const { userId, fullName, firstName, lastName, isVerified, createdAt, avatar } = user;

        await UserModel.updateOne({ phone }, { lastLogin: Date.now() });

        return { result, user: { userId, fullName, firstName, lastName, phone, isVerified, createdAt, avatar }};
    } catch (error) {
        log(error);

        if (error.message === 'User is disabled.') {
            throw AppError.UserNotFound();
        }

        if (error.error === 'GeneralBadRequest') {
            throw AppError.GeneralBadRequest();
        }

        throw AppError.IncorrectUsernameOrPassword();
    }
};

module.exports.verifyAccount = async ({
    phone,
    code,
    type
}) => {
    const now = Date.now();
    const otp = await OTPModel.findOne({
        status: false, 
        expiredAt: { $gt: now },
        usageCount: { $gt: 0 },
        type,
        phone 
    }).exec();

    if (!otp) {
        return AppError.OtpNotFound();
    }

    if (otp.usageCount < 1) {
        return AppError.OtpIsInvalid();
    }

    if (otp.code !== code) {
        await OTPModel.updateOne({ _id: otp.id }, { $inc: { usageCount: -1 } });

        return AppError.OtpIsWrong({ usageCount:  otp.usageCount - 1 });
    }

    await Promise.all([
        CognitoIdentityServiceProvider.adminConfirmSignUp({ username: phone }),
        CognitoIdentityServiceProvider.adminUpdateUserAttributes({
            id: phone,
            attributes: [
                {
                    Name: 'phone_number_verified',
                    Value: 'true',
                },
            ],
        }),
       OTPModel.updateOne({ _id: otp.id }, { status: true }),
       UserModel.updateOne({ phone }, { isVerified: true })
    ]);

    return { status: 'ok' };
};
