"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralBadRequest = exports.GeneralInternalServerError = void 0;
const base_1 = require("./base");
const httpStatus_1 = require("./httpStatus");
const GeneralInternalServerError = (details, stack) => {
    return new base_1.AppError('GeneralInternalServerError', httpStatus_1.HttpStatus.InternalServerError, details, stack);
};
exports.GeneralInternalServerError = GeneralInternalServerError;
const GeneralBadRequest = () => {
    return new base_1.AppError('GeneralBadRequest', httpStatus_1.HttpStatus.BadRequest);
};
exports.GeneralBadRequest = GeneralBadRequest;
//# sourceMappingURL=errors.js.map