const AppError = require('../appError');
const { CognitoIdentityServiceProvider } = require('../../shared/aws/cognito');
const { log } = require('../../utils/logging');
const { invoke } = require('../../shared/aws/lambda');
const constant = require('../../utils/constant');
const userModel = require('../../models/user');

module.exports.signUp = async ({
    phone,
    password,
}) => {
    const { OPT_TYPE } = constant;
    const user = await userModel.findOne({ phone }).exec();

    if (user) {
        return AppError.UserPhoneExists();
    }

    const { data: userId } = await CognitoIdentityServiceProvider.signUp({
        username: phone,
        password,
    });
    const userCreated = await userModel.create({
        userId,
        phone
    })

    await invoke({
        body: { userId, type: OPT_TYPE.SIGN_UP },
        functionName: `${process.env.FUNCTION_PREFIX}-2triggerSendOTP`,
    });

    return userCreated._id;
}

module.exports.signIn = async ({ phone, password }) => {
    try {

        const result = await CognitoIdentityServiceProvider.initiateAuth(
            {
                username: phone,
                password,
            }
        );

       return result;
    } catch (error) {
        log(error);

        if (error.message === 'User is disabled.') {
            throw AppError.UserNotFound();
        }

        if (error.error === 'GeneralBadRequest') {
            throw AppError.GeneralBadRequest();
        }

        if (error.error === 'UserEmailExists') {
            throw AppError.UserEmailExists();
        }

        throw AppError.IncorrectUsernameOrPassword();
    }
};