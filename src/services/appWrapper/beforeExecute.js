const { path } = require('ramda');
const { validator } = require('../middleware/validator');

const beforeExecute = async ({ schema, event, coerceTypes }) => {
    let _event;
    const lang = 'en'; // English
    const contentType = path(['headers', 'Content-Type'], event);

    if (contentType && contentType.indexOf('multipart/form-data') > -1) {
        _event = validator({ schema, event: { ...event, body: null }, lang, coerceTypes });
    } else {
        _event = validator({ schema, event, lang, coerceTypes });
    }

    return {
        event: _event,
    };
};

module.exports = { beforeExecute };