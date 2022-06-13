const { log } = require('../../shared/utils/logging');

class AppError extends Error {
    /**
     * @constructor
     * @param {ErrorCode} errorCode
     * @param {String} http status
     * @param {Array<string>} details message details
     */
    constructor(error, status, details = [], stack, data = '') {
        super();

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }

        this.name = error;
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

        const errorObj = {
            message: this.error,
        };

        if (this.details.length) {
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

module.exports = AppError;
