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
const response_1 = require("../../utils/response");
const beforeExecute_1 = require("./beforeExecute");
const captureHeaders_1 = require("./captureHeaders");
const catchError_1 = require("./catchError");
const appWrapper = ({ fn, schema }) => {
    (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
        context.callbackWaitsForEmptyEventLoop = false;
        try {
            const res = new response_1.default({});
            const { event: _event } = yield (0, beforeExecute_1.beforeExecute)({
                schema,
                event,
            });
            (0, captureHeaders_1.captureHeaders)(_event);
            yield fn({
                event: _event,
                context,
                res
            });
            callback(null, res.toJSON());
        }
        catch (error) {
            const appError = (0, catchError_1.catchError)(error);
            const res = new response_1.default(appError.toJSON());
            callback(null, res.toJSON());
        }
        finally {
        }
    });
};
exports.default = appWrapper;
//# sourceMappingURL=index.js.map