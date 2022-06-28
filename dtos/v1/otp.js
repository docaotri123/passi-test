const { OPT_TYPE } = require('../../utils/constant');

module.exports = {
    resendOTP: {
        properties: {
            phone: {
                type: 'string',
                isValidPhoneFormat: true,
            },
            type: { type: 'string', enum: [OPT_TYPE.SIGN_UP] }
        },
        required: ['phone', 'type'],
        coerceTypes: true,
        additionalProperties: false,
    },
}