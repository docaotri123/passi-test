const { OPT_TYPE } = require('../../utils/constant');

module.exports = {
    signUp: {
        properties: {
            phone: {
                type: 'string',
                isValidPhoneFormat: true,
            },
            password: { type: 'string', isValidFormatPassword: true },
        },
        required: ['phone', 'password'],
        coerceTypes: true,
        additionalProperties: false,
    },
    signIn: {
        properties: {
            phone: {
                type: 'string',
                isValidPhoneFormat: true,
            },
            password: { type: 'string' }
        },
        required: ['phone', 'password'],
        coerceTypes: true,
        additionalProperties: false,
    },
    verifyAccount: {
        properties: {
            phone: {
                type: 'string',
                isValidPhoneFormat: true,
            },
            code: { type: 'string' },
            type: { type: 'string', enum: [OPT_TYPE.SIGN_UP] }
        },
        required: ['phone', 'code', 'type'],
        coerceTypes: true,
        additionalProperties: false,
    },
}