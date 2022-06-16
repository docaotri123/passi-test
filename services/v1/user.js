const AppError = require('../appError');
const { CognitoIdentityServiceProvider } = require('../../shared/aws/cognito');
const { log } = require('../../utils/logging');
const { invoke } = require('../../shared/aws/lambda');

module.exports.signUp = async ({
    phone,
    password,
}) => {
    // const { data: userId } = await CognitoIdentityServiceProvider.signUp({
    //     username: phone,
    //     password,
    // });

    await invoke({
        body: { name: 'test' },
        functionName: `${process.env.FUNCTION_PREFIX}-2triggerSendOTP`,
    });

    return { name: '' };
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