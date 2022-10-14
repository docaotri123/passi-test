
const { triggerWrapper } = require('../../services/appWrapper');
const { AuthService } = require('../../services/v1/auth');

const authService = new AuthService();

const authFns = {
  authorizerFunc: async ({ event }) => {
    const result = await authService.authorizerFunc(event);

    return result;
  },
};

const authorizerFunc = triggerWrapper({
  fn: authFns.authorizerFunc
});

module.exports = { authorizerFunc };
