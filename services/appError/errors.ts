import { AppError } from './base';
import { HttpStatus } from './httpStatus';

const GeneralInternalServerError = (details: Array<string>, stack: string) => {
    return new AppError(
        'GeneralInternalServerError',
        HttpStatus.InternalServerError,
        details,
        stack
    );
}

const GeneralBadRequest = () => {
    return new AppError('GeneralBadRequest', HttpStatus.BadRequest);
}

export {
    GeneralInternalServerError,
    GeneralBadRequest
};
