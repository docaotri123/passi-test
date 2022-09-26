import {
  Handler,
  // APIGatewayEvent,
  // Context,
} from "aws-lambda";
import { triggerWrapper } from '../../services/appWrapper';
import AuthService from "../../services/v1/auth";

const authService = new AuthService();

const authFns = {
  authorizerFunc: async ({ event }) => {
    const result = await authService.authorizerFunc(event);

    return result;
  },
};

const authorizerFunc: Handler = triggerWrapper({
  fn: authFns.authorizerFunc
});

export { authorizerFunc };
