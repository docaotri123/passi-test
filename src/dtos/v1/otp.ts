import { OPT_TYPE } from '../../utils/constant';

const resendOTP = {
  properties: {
    phone: {
      type: 'string'
    },
    type: { type: 'string', enum: [OPT_TYPE.SIGN_UP] }
  },
  required: [],
  additionalProperties: true
};

export { resendOTP };
