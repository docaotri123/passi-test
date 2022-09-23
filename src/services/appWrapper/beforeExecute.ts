import { path } from 'ramda'
import validator from'../middleware/validator';

export const beforeExecute = async ({ schema, event }) => {
    let _event = null;
    const lang = 'en'; // English
    const contentType = path<string>(['headers', 'Content-Type'], event);

    if (contentType && contentType.indexOf('multipart/form-data') > -1) {
        _event = validator({ schema, event: { ...event, body: null }, lang });
    } else {
        _event = validator({ schema, event, lang });
    }

    return {
        event: _event,
    };
};
