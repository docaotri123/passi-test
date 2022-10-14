const { log } = require('../../utils/logging');

class AppError extends Error {
    /**
     * @constructor
     * @param {Error} error
     * @param {Number} status
     * @param {Array<string>} details
     * @param {String} stack option field
     * @param {Array<any>} data option field
     */
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
        if (this.status >= 500) {
            log(this.toString());
        }

        const errorObject = {
            message: this.error
        };

        if (this.details?.length) {
            errorObject.details = this.details;
        }

        if (this.data) {
            errorObject.data = this.data;
        }

        return {
            status: this.status,
            error: errorObject,
        };
    }
}

module.exports = { AppError };