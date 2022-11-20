import * as Lambda from 'aws-sdk/clients/lambda'

export class LambdaService {
  private lambda: Lambda;

  constructor () {    
    this.lambda = new Lambda({
      region: 'ap-southeast-1',
      endpoint: process.env.IS_OFFLINE ? 'http://localhost:3002' : undefined,
    });
  }

  public invoke({ body, functionName, invokeType = "Event" }) {
    const params = {
      FunctionName: functionName,
      Payload: JSON.stringify(body),
      InvocationType: invokeType,
    };

    return this.lambda.invoke(params).promise();
  }
}