import { AppError } from'../appError';

export default class OTPService {
    /**
     * resendOTP
     */
    public static resendOTP(requestData: any) {

        if (requestData.test) {
            throw AppError.GeneralBadRequest();
        }

        return { name: 'tri' };
    }

    /**
     * resendOTP
     */
    public static triggerSendOTP(event: any) {
        return event;
    }
}
