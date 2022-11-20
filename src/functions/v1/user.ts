import {
    proxyHandler,
    requestFunction
} from '../../types/common';
import { appWrapper } from '../../services/appWrapper';
import UserService from '../../services/v1/user';
import { HttpStatus } from '../../services/appError';
import { userRegister, userAuthentication } from '../../dtos/v1/user';

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
    }
};

const signUp: proxyHandler = appWrapper({ fn: userFns.signUp, schema: userRegister });
const authentication: proxyHandler = appWrapper({ fn: userFns.authentication, schema: userAuthentication });

export { signUp, authentication };
