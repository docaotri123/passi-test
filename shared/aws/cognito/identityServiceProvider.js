const AWS = require('aws-sdk');
const { getEnv } = require('../ssm');

const cognitoIdentityServiceProvider = () => {
    return new AWS.CognitoIdentityServiceProvider({
        apiVersion: '2016-04-18',
        region: 'ap-southeast-1',
    });
}

const adminConfirmSignUp = async ({ username, metadata = {} }) => {
    const UserPoolId = await getEnv('COGNITO_USER_POOL_ID');
    const params = {
        UserPoolId,
        Username: username,
        ClientMetadata: metadata,
    };

    return cognitoIdentityServiceProvider()
        .adminConfirmSignUp(params)
        .promise();
};

const signUp = async ({ username, password }) => {
    const ClientId = await getEnv('COGNITO_CLIENT_ID');
    const params = {
        ClientId,
        Password: password,
        Username: username,
        UserAttributes: [
            {
                Name: 'name',
                Value: '',
            },
        ],
    };
    const user = await cognitoIdentityServiceProvider()
        .signUp(params)
        .promise();

    return { data: user.UserSub };
};

const initiateAuth = async ({ username, password }) => {
    const ClientId = await getEnv('COGNITO_CLIENT_ID');
    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
        },
    };
    const {
        ChallengeName,
        AuthenticationResult,
        Session,
        ChallengeParameters,
    } = await cognitoIdentityServiceProvider().initiateAuth(params).promise();

    if (ChallengeName === 'NEW_PASSWORD_REQUIRED') {
        return {
            changePassword: true,
            session: Session,
            email: JSON.parse(ChallengeParameters.userAttributes).email,
        };
    }

    return {
        accessToken: AuthenticationResult.AccessToken,
        refreshToken: AuthenticationResult.RefreshToken,
        expiresIn: AuthenticationResult.ExpiresIn,
    };
};

const adminUpdateUserAttributes = async ({ id, attributes = [] }) => {
    const UserPoolId = await getEnv('COGNITO_USER_POOL_ID');
    const params = {
        UserAttributes: [...attributes],
        UserPoolId /* required */,
        Username: id /* required */,
    };

    return cognitoIdentityServiceProvider()
        .adminUpdateUserAttributes(params)
        .promise();
};

module.exports = {
    adminUpdateUserAttributes,
    adminConfirmSignUp,
    signUp,
    initiateAuth,
}