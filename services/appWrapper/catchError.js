const AppError = require('../appError');

module.exports = (error) => {
    const { code, name } = error;
    const codeName = `${name}-${code}`;

    switch (codeName) {
        case 'MongoError-11000':
            return AppError.GeneralDuplicatedInformation();
        default: {
            if (error.toJSON) {
                return error;
            }

            return AppError.GeneralInternalServerError([], error.stack);
        }
    }
};
