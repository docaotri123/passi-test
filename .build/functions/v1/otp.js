"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const appWrapper_1 = require("../../services/appWrapper");
const otp_1 = require("../../services/v1/otp");
const otpDtos = require("../../dtos/v1/otp");
const appError_1 = require("../../services/appError");
const otpFns = {
    triggerSendOTP: (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
        context.callbackWaitsForEmptyEventLoop = false;
        yield otp_1.default.triggerSendOTP(event);
        callback(null, { body: JSON.stringify({ message: 'ok' }) });
    }),
    resendOTP: ({ event, res }) => __awaiter(void 0, void 0, void 0, function* () {
        const { requestData } = event;
        const data = yield otp_1.default.resendOTP(requestData);
        res.status(appError_1.HttpStatus.Created).data(data);
    })
};
module.exports = {
    triggerSendOTP: otpFns.triggerSendOTP,
    resendOTP: (0, appWrapper_1.default)({
        fn: otpFns.resendOTP,
        schema: otpDtos.resendOTP
    })
};
//# sourceMappingURL=otp.js.map