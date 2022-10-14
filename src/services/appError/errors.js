const { AppError } = require('./base');
const { HttpStatus } = require('./httpStatus');

const GeneralInternalServerError = (details, stack) => {
    return new AppError(
        'GeneralInternalServerError',
        HttpStatus.InternalServerError,
        details,
        stack
    );
}

const GeneralInvalidParameters = (details) => {
    return new AppError(
        'GeneralInvalidParameters',
        HttpStatus.BadRequest,
        details
    );
}

const GeneralBadRequest = () => {
    return new AppError('GeneralBadRequest', HttpStatus.BadRequest);
}

module.exports = {
    GeneralInternalServerError,
    GeneralBadRequest,
    GeneralInvalidParameters
};
