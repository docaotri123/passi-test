import {
    proxyHandler,
    requestFunction
} from '../../types/common';
import { appWrapper } from '../../service/appWrapper';
import UserService from '../../service/v1/user';
import { HttpStatus } from '../../service/appError';
import { userRegister, userAuthentication, userConfirmSignUp } from '../../dtos/v1/user';

const userService = new UserService();

const userFns = {
    signUp: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await userService.signUp(requestData);

        res.status(HttpStatus.Created).data(data);
    },
    authentication: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await userService.authentication(requestData);

        res.status(HttpStatus.Ok).data(data);
    },
    confirmSignUp: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await userService.confirmSignUp(requestData);

        res.status(HttpStatus.NoContent).data(data);
    }
};

const signUp: proxyHandler = appWrapper({ fn: userFns.signUp, schema: userRegister });
const authentication: proxyHandler = appWrapper({ fn: userFns.authentication, schema: userAuthentication });
const confirmSignUp: proxyHandler = appWrapper({ fn: userFns.confirmSignUp, schema: userConfirmSignUp });

export { signUp, authentication, confirmSignUp };
