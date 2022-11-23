import { JSONSchemaType } from 'ajv'
import { IAuthentication, IUserRegister, IConfirmSignUp } from '../../interfaces/user';

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

const userAuthentication: JSONSchemaType<IAuthentication> = {
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
    },
    required: ['email', 'password'],
    additionalProperties: false
};

const userConfirmSignUp: JSONSchemaType<IConfirmSignUp> = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
            minLength: 1
        },
        code: {
            type: 'string',
            minLength: 1
        },
    },
    required: ['email', 'code'],
    additionalProperties: false
};

export { userRegister, userAuthentication, userConfirmSignUp };
