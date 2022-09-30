import { JSONSchemaType } from 'ajv'
import { OPT_TYPE } from '../../utils/constant';
import { IResendOTP } from '../../interfaces/otp';

const resendOTP: JSONSchemaType<IResendOTP> = {
  type: 'object',
  properties: {
    phone: {
      type: 'string'
    },
    type: { type: 'string', enum: [OPT_TYPE.SIGN_UP], nullable: true }
  },
  required: ['phone'],
  additionalProperties: false
};

export { resendOTP };
