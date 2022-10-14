
class IAMService {
  generatePolicy({ effect, resources, context = {} }) {
    return {
      principalId: "*",
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: "execute-api:Invoke",
            Effect: effect,
            Resource: resources,
          },
        ],
      },
      context,
    };
  }
}

module.exports = { IAMService };