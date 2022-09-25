import {
  Handler,
  // APIGatewayEvent,
  // Context,
} from "aws-lambda";
import AuthService from "../../services/v1/auth";

const authService = new AuthService();

const otpFns = {
  authorizerFunc: async (event) => {
    const result = await authService.authorizerFunc(event);
    console.log('authorizerFunc', result);

    return result;
  },
};

const authorizerFunc: Handler = otpFns.authorizerFunc;

export { authorizerFunc };
