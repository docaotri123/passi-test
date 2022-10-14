const { Lambda } = require('aws-sdk')

class LambdaService {
  constructor () {    
    this.lambda = new Lambda({
      region: 'ap-southeast-1',
      endpoint: process.env.IS_OFFLINE ? 'http://localhost:3002' : undefined,
    });
  }

  invoke({ body, functionName, invokeType = "Event" }) {
    const params = {
      FunctionName: functionName,
      Payload: JSON.stringify(body),
      InvocationType: invokeType,
    };

    return this.lambda.invoke(params).promise();
  }
}

module.exports = { LambdaService };