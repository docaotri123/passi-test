import * as AWS from 'aws-sdk'

export class LambdaService {
  private lambda: AWS.Lambda;

  constructor () {
    this.lambda = new AWS.Lambda({
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