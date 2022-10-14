const AppError = require("../appError");

const catchError = (error) => {
  const { code, name } = error;
  const codeName = `${name}-${code}`;

  switch (codeName) {
    case "MongoError-11000":
      return AppError.GeneralInternalServerError([], "");
    default: {
      if (error.toJSON) {
        return error;
      }

      return AppError.GeneralInternalServerError([], error.stack);
    }
  }
};

module.exports = { catchError };