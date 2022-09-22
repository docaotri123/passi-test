"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
const appError_1 = require("../appError");
const catchError = (error) => {
    const { code, name } = error;
    const codeName = `${name}-${code}`;
    switch (codeName) {
        case 'MongoError-11000':
            return appError_1.AppError.GeneralInternalServerError([], '');
        default: {
            if (error.toJSON) {
                return error;
            }
            return appError_1.AppError.GeneralInternalServerError([], error.stack);
        }
    }
};
exports.catchError = catchError;
//# sourceMappingURL=catchError.js.map