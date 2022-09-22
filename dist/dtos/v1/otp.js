"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resendOTP = void 0;
const constant_1 = require("../../utils/constant");
const resendOTP = {
    properties: {
        phone: {
            type: 'string',
            isValidPhoneFormat: true,
        },
        type: { type: 'string', enum: [constant_1.OPT_TYPE.SIGN_UP] },
    },
    required: [],
    coerceTypes: true,
    additionalProperties: false,
};
exports.resendOTP = resendOTP;
//# sourceMappingURL=otp.js.map