const R = require('ramda');
const validator = require('../middlewares/validator');

module.exports = async ({ schema, event }) => {
    let _event = null;
    const lang = 'en';
    const contentType = R.path(['headers', 'Content-Type'], event);

    if (contentType && contentType.indexOf('multipart/form-data') > -1) {
        // const body = upload({ event });
        _event = validator({ schema, event: { ...event, body: null }, lang });
    } else {
        _event = validator({ schema, event, lang });
    }

    return {
        event: _event,
    };
};
