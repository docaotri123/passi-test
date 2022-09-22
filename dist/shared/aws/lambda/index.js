"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoke = void 0;
const aws_sdk_1 = require("aws-sdk");
const invoke = ({ body, functionName, invokeType = 'Event' }) => {
    const lambda = new aws_sdk_1.Lambda({
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
exports.invoke = invoke;
//# sourceMappingURL=index.js.map