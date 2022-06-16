const mongoose = require('mongoose');

let dbConnection = null;

module.exports.createConnection = async ({ endpoint, options = {} }) => {
    if (dbConnection && dbConnection.connection.readyState === 1) {
        return dbConnection;
    }

    const defaultOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 1,
        readPreference: 'secondaryPreferred',
    };

    dbConnection = await mongoose.connect(endpoint, {
        ...defaultOptions,
        ...options,
    });

    return dbConnection;
};

module.exports.closeConnection = async () => {
    if (dbConnection) {
        dbConnection.connection.close();
    }
};
