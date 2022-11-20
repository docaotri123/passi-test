import {
    proxyHandler,
    requestFunction
} from '../../types/common';
import { appWrapper } from '../../services/appWrapper';
import UserService from '../../services/v1/user';
import { HttpStatus } from '../../services/appError';
import { userRegister } from '../../dtos/v1/user';

const userService = new UserService();

const userFns = {
    signUp: async (requestFunction: requestFunction) => {
        console.log('sign-up');
        
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await userService.signUp(requestData);

        res.status(HttpStatus.Created).data(data);
    }
};

const signUp: proxyHandler = appWrapper({ fn: userFns.signUp, schema: userRegister });

export { signUp };
