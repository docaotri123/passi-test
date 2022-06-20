const AWS = require('aws-sdk');

module.exports.invoke = ({ body, functionName, invokeType = 'Event' }) => {
    const lambda = new AWS.Lambda({
        region: 'ap-southeast-1',
        endpoint: process.env.IS_OFFLINE ? 'http://localhost:3002' : undefined,
    });
    const params = {
        FunctionName: functionName,
        Payload: JSON.stringify(body),
        InvocationType: invokeType,
    };

    return lambda.invoke(params).promise();
};
