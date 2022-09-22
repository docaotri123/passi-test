import { OPT_TYPE } from'../../utils/constant';

const resendOTP = {
    properties: {
        phone: {
            type: 'string',
            isValidPhoneFormat: true,
        },
        type: { type: 'string', enum: [OPT_TYPE.SIGN_UP] },
    },
    required: [],
    coerceTypes: true,
    additionalProperties: false,
};

export {
    resendOTP
};
