const {
    createMongoConnection,
    closeMongoConnection,
    mongoModel,
} = require('../shared/mongo');

module.exports = {
    createMongoConnection: (options = {}) => {
        return createMongoConnection({
            endpoint: process.env.DB_MONGO,
            options,
        });
    },
    closeMongoConnection,
    mongoModel
};