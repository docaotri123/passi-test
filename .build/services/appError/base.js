"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const logging_1 = require("../../utils/logging");
class AppError extends Error {
    constructor(error, status, details, stack, data) {
        super();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        this.error = error;
        this.status = status;
        this.date = new Date();
        this.details = details;
        if (stack) {
            this.stack = stack;
        }
        if (data) {
            this.data = data;
        }
    }
    toString() {
        return `${this.stack} ${this.date}`;
    }
    toJSON() {
        var _a;
        if (this.status >= 500) {
            (0, logging_1.log)(this.toString());
        }
        const errorObj = {
            message: this.error,
            details: [],
            data: []
        };
        if ((_a = this.details) === null || _a === void 0 ? void 0 : _a.length) {
            errorObj.details = this.details;
        }
        if (this.data) {
            errorObj.data = this.data;
        }
        return {
            status: this.status,
            error: errorObj,
        };
    }
}
exports.AppError = AppError;
//# sourceMappingURL=base.js.map