import { LambdaService } from '../shared/aws/lambda'

const functions = [
    'triggerSendOTP',
    'authorizer'
];

const warmUpFunc = async () => {
    console.log('warmUpFunc');
    const lambdaService = new LambdaService();
    const promises = functions.map(func => {
        const functionName = `${process.env.FUNCTION_PREFIX}-${func}`;
        console.log(functionName);
        
        return lambdaService.invoke({
            body: {
                source: 'serverless-warmup',
            },
            functionName,
            invokeType: "Event"
        });
    });

    await Promise.allSettled(promises);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'ok' })
    };
}

export { warmUpFunc };
