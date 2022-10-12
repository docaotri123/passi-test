import { path } from 'ramda'
import validator from'../middleware/validator';
import { eventRequest } from '../../types/common'

export const beforeExecute = async ({ schema, event, coerceTypes }) => {
    let _event: eventRequest;
    const lang = 'en'; // English
    const contentType = path<string>(['headers', 'Content-Type'], event);

    if (contentType && contentType.indexOf('multipart/form-data') > -1) {
        _event = validator({ schema, event: { ...event, body: null }, lang, coerceTypes });
    } else {
        _event = validator({ schema, event, lang, coerceTypes });
    }

    return {
        event: _event,
    };
};
