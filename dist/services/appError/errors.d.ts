import { AppError } from './base';
declare const GeneralInternalServerError: (details: Array<string>, stack: string) => AppError;
declare const GeneralBadRequest: () => AppError;
export { GeneralInternalServerError, GeneralBadRequest };
