"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appError_1 = require("../appError");
class OTPService {
    static resendOTP(requestData) {
        if (requestData.test) {
            throw appError_1.AppError.GeneralBadRequest();
        }
        return requestData;
    }
    static triggerSendOTP(event) {
        return event;
    }
}
exports.default = OTPService;
//# sourceMappingURL=otp.js.map