const {
    closeMongoConnection,
} = require('../../models');

module.exports = async ({ useMongoConnection }) => {
    if (useMongoConnection) {
        await closeMongoConnection();
    }

    closeNeptuneConnection();
};
