const AWS = require('aws-sdk');

module.exports.getParametersByPath = (path) => {
    const params = {
        Path: path,
        MaxResults: 100,
    };

    return ssm.getParametersByPath(params).promise();
};

module.exports.getEnvs = async (names) => {
    if (['local'].includes(process.env.NODE_ENV)) {
        return names.reduce((result, name) => {
            return {
                ...result,
                [name]: process.env[name],
            };
        }, {});
    }

    // const params = {
    //     Names: names.map((name) => `${process.env.SSM_PREFIX}/${name}`),
    //     WithDecryption: false,
    // };
    // const { Parameters } = await ssm.getParameters(params).promise();
    // const data = Parameters.reduce((result, parameter) => {
    //     return {
    //         ...result,
    //         [parameter.Name.split('/').slice(-1)[0]]: parameter.Value,
    //     };
    // }, {});

    // return data;
    const envs = {
        COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
        COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
        COGNITO_USER_POOL_NAME: process.env.COGNITO_USER_POOL_NAME,
        FUNCTION_PREFIX: process.env.FUNCTION_PREFIX
    };

    return names.reduce((result, name) => {
        return {
            ...result,
            [name]: envs[name],
        };
    }, {}); 
};

module.exports.getEnv = async (name) => {
    if (['local'].includes(process.env.NODE_ENV)) {
        return process.env[name];
    }

    // const params = {
    //     Name: `${process.env.SSM_PREFIX}/${name}`,
    //     WithDecryption: false,
    // };
    // const { Parameter } = await ssm.getParameter(params).promise();

    // return Parameter.Value;

    const envs = {
        COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
        COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
        COGNITO_USER_POOL_NAME: process.env.COGNITO_USER_POOL_NAME,
        FUNCTION_PREFIX: process.env.FUNCTION_PREFIX
    };

    return envs[name];
};
