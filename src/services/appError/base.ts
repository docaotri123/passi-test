import { log } from '../../utils/logging';

type ErrorObject = {
    message: any,
    details: Array<string>,
    data: Array<any>
}

export class AppError extends Error {
    private error: any;
    private status: any;
    private date: Date;
    private details: Array<string> | undefined;
    private data: Array<any>;
    /**
     * @constructor
     * @param {Error} error
     * @param {Number} status
     * @param {Array<string>} details
     * @param {String} stack option field
     * @param {Array<any>} data option field
     */
    constructor(error: any, status: number, details?: Array<string>, stack?: string, data?: Array<any>) {
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
        if (this.status >= 500) {
            log(this.toString());
        }

        const errorObj: ErrorObject = {
            message: this.error,
            details: [],
            data: []
        };

        if (this.details?.length) {
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