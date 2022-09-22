import { AppError } from'../appError';

export default class OTPService {
    /**
     * resendOTP
     */
    public static resendOTP(requestData: any) {

        if (requestData.test) {
            throw AppError.GeneralBadRequest();
        }

        return requestData;
    }

    /**
     * resendOTP
     */
    public static triggerSendOTP(event: any) {
        return event;
    }
}
