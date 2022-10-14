const { IAMService } = require("../../shared/aws/iam");

class AuthService {
  constructor() {
    this.iamService = new IAMService();
  }

  /**
   * authorizerFunc
   */
  async authorizerFunc({ headers, methodArn, path, pathParameters }) {
    try {
      const token = headers.Authorization;

      if (!token) {
        return this.iamService.generatePolicy({
          effect: "Deny",
          resources: [methodArn],
          context: {
            "jwt-userId": "jwt-userId",
          },
        });
      }

      return this.iamService.generatePolicy({
        effect: "Allow",
        resources: [methodArn],
        context: {
          "jwt-userId": "jwt-userId",
        },
      });
    } catch (error) {
      console.log(error);
      return this.iamService.generatePolicy({
        effect: "Deny",
        resources: [methodArn],
      });
    }
  }
}

module.exports = { AuthService };