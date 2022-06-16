const { createConnection, closeConnection } = require('./connection');
const model = require('./model');

module.exports = {
    createMongoConnection: createConnection,
    closeMongoConnection: closeConnection,
    mongoModel: model,
};
