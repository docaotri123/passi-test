import { AppError } from './base';
import { HttpStatus } from './httpStatus';

const GeneralInternalServerError = (details: Array<string>, stack: string) => {
    return new AppError(
        'GeneralInternalServerError',
        HttpStatus.InternalServerError,
        details,
        stack
    ).toJSON();
}

const GeneralInvalidParameters = (details: Array<string>) => {
    return new AppError(
        'GeneralInvalidParameters',
        HttpStatus.BadRequest,
        details
    ).toJSON();
}

const GeneralBadRequest = () => {
    return new AppError('GeneralBadRequest', HttpStatus.BadRequest).toJSON();
}

const UserNotFound = () => {
    return new AppError('UserNotFound', HttpStatus.NotFound).toJSON();
}

export {
    GeneralInternalServerError,
    GeneralBadRequest,
    GeneralInvalidParameters,
    UserNotFound
};
