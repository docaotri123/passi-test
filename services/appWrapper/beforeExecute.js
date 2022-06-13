const R = require('ramda');

const { createMongoConnection } = require('../../models');
const validator = require('../middlewares/validator');
const upload = require('../middlewares/upload');

module.exports = async ({ schema, event, useMongoConnection }) => {
    let _event = null;
    const lang = 'en';
    const contentType = R.path(['headers', 'Content-Type'], event);

    if (contentType && contentType.indexOf('multipart/form-data') > -1) {
        const body = upload({ event });
        _event = validator({ schema, event: { ...event, body }, lang });
    } else {
        _event = validator({ schema, event, lang });
    }

    if (useMongoConnection) {
        await createMongoConnection();
    }

    return {
        event: _event,
    };
};
