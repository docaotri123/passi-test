import { Lambda } from 'aws-sdk'

export class LambdaService {
    public invoke = ({ body, functionName, invokeType = 'Event' }) => {
        const lambda = new Lambda({
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
}