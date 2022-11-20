import { JSONSchemaType } from 'ajv'
import { IUserRegister } from '../../interfaces/user';

const userRegister: JSONSchemaType<IUserRegister> = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
            minLength: 1
        },
        password: {
            type: 'string',
            minLength: 1
        },
        firstName: {
            type: 'string',
            minLength: 1
        },
    },
    required: ['email', 'password', 'firstName'],
    additionalProperties: false
};


export { userRegister };
