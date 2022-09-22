import { Lambda } from 'aws-sdk';
declare const invoke: ({ body, functionName, invokeType }: {
    body: any;
    functionName: any;
    invokeType?: string;
}) => Promise<import("aws-sdk/lib/request").PromiseResult<Lambda.InvocationResponse, import("aws-sdk").AWSError>>;
export { invoke };
