const AppError = require('./base');
const HttpStatus = require('./httpStatus');

module.exports = {
    GeneralInternalServerError: (details, stack) =>
        new AppError(
            'GeneralInternalServerError',
            HttpStatus.InternalServerError,
            details,
            stack
        ),
    GeneralBadRequest: () =>
        new AppError('GeneralBadRequest', HttpStatus.BadRequest),
    GeneralForbidden: () =>
        new AppError('GeneralForbidden', HttpStatus.Forbidden),
    GeneralInvalidParameters: (details) =>
        new AppError(
            'GeneralInvalidParameters',
            HttpStatus.BadRequest,
            details
        ),
    GeneralInvalidContentType: () =>
        new AppError('GeneralInvalidContentType', HttpStatus.BadRequest),
    GeneralDatabaseError: () =>
        new AppError('GeneralDatabaseError', HttpStatus.InternalServerError),
    GeneralDuplicatedInformation: () =>
        new AppError('GeneralDuplicatedInformation', HttpStatus.BadRequest),
    GeneralNotFound: () => new AppError('GeneralNotFound', HttpStatus.NotFound),
    GeneralInvalidRequest: () =>
        new AppError('GeneralInvalidRequest', HttpStatus.NotFound),
    GeneralLimitNumberOfFiles: () =>
        new AppError('GeneralLimitNumberOfFiles', HttpStatus.BadRequest),
    UserInternalServerError: () =>
        new AppError('UserInternalServerError', HttpStatus.InternalServerError),
    UserPhoneExists: () =>
        new AppError('UserPhoneExists', HttpStatus.BadRequest),
    IncorrectUsernameOrPassword: () =>
        new AppError('IncorrectUsernameOrPassword', HttpStatus.BadRequest),
    OtpIsWrong: (data) =>
        new AppError('OtpIsWrong', HttpStatus.BadRequest, [], null, data),
    OtpNotFound: () =>
        new AppError('OtpNotFound', HttpStatus.BadRequest),
    OtpIsInvalid: () =>
        new AppError('OtpIsInvalid', HttpStatus.BadRequest),
};
