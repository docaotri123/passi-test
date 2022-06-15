const AWS = require('aws-sdk');
const { getEnv } = require('../ssm');

const cognitoIdentityServiceProvider = () => {
    return new AWS.CognitoIdentityServiceProvider({
        apiVersion: '2016-04-18',
        region: 'ap-southeast-1',
    });
}

const signUp = async ({ username, password }) => {
    try {
        const ClientId = await getEnv('COGNITO_CLIENT_ID');
        const params = {
            ClientId,
            Password: password,
            Username: username,
            UserAttributes: [
                {
                    Name: 'name',
                    Value: 'tri',
                },
            ],
        };
        const user = await cognitoIdentityServiceProvider()
            .signUp(params)
            .promise();

        return { data: user.UserSub };
    } catch (error) {
        console.log('signUp Error: ', error);

        return { data: null };
    }
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

module.exports = {
    signUp,
    initiateAuth
}