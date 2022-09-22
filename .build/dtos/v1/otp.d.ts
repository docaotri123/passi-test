import { OPT_TYPE } from '../../utils/constant';
declare const resendOTP: {
    properties: {
        phone: {
            type: string;
            isValidPhoneFormat: boolean;
        };
        type: {
            type: string;
            enum: OPT_TYPE[];
        };
    };
    required: any[];
    coerceTypes: boolean;
    additionalProperties: boolean;
};
export { resendOTP };
