const Ajv = require('ajv');
const localize = require('ajv-i18n');
const moment = require('moment');
const { log } = require('../../utils/logging');

const AppError = require('../appError');

const isValidTimeZone = (tz) => {
    if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
        log('Time zones are not available in this environment');

        return false
    }

    try {
        Intl.DateTimeFormat(undefined, { timeZone: tz });
        return true;
    } catch (ex) {
        return false;
    }
};

const isYoutubeLink = (url) => {
    const regexYoutubeLink = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/i;

    return regexYoutubeLink.test(url);
};

const passwordValidators = {
    minLength: {
        message: 'Minimum 10 characters',
        validate: (value) => value.length >= 10,
    },
    upperCase: {
        message: 'At least 1 uppercase character',
        validate: (value) => /[A-Z]+/.test(value),
    },
    lowerCase: {
        message: 'At least 1 lower character',
        validate: (value) => /[a-z]+/.test(value),
    },
    numbers: {
        message: 'At least 1 numeric character',
        validate: (value) => /[0-9]+/.test(value),
    },
    symbols: {
        message: 'At least 1 special symbol (Non-alphanumeric)',
        validate: (value) => /[^a-zA-Z0-9]+/.test(value),
    },
};

const isValidFormatPassword = (data) => {
    const validators = [];

    for (const [key] of Object.entries(passwordValidators)) {
        validators.push(passwordValidators[key].validate(data));
    }

    return validators.every((validator) => validator);
};

const isFormatRecoveryEmail = (email) => {
    if (email === '') {
        return true;
    }

    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
};

const isValidPhoneFormat = (phone) => {
    const regex = /^[\+][[0-9]{3}]?[0-9]{3}]?[0-9]{4,6}$/gi;

    return regex.test(phone);
};

const customValidator = () => {
    return {
        isValidTimeZone: {
            validate: (schemaValue, data) => isValidTimeZone(data),
        },
        isValidFormatPassword: {
            validate: (schemaValue, data) => isValidFormatPassword(data),
        },
        isValidPhoneFormat: {
            validate: (_, data) => isValidPhoneFormat(data),
        },
        isFormatRecoveryEmail: {
            validate: (schemaValue, data) => isFormatRecoveryEmail(data),
        },
        youtubeLink: {
            validate: (schemaValue, data) =>
                data ? isYoutubeLink(data) : true,
        },
        wordsLength: {
            validate: (schemaValue, data) => {
                const wordsLength = data
                    .trim()
                    .split(' ')
                    .filter((word) => word.length).length;

                return wordsLength >= schemaValue;
            },
        },
        in: {
            validate: (schemaValue, data = '') =>
                data.split(',').filter((item) => !schemaValue.includes(item))
                    .length === 0,
        },
        minDay: {
            validate: (schemaValue, data) =>
                moment().add(schemaValue, 'day').isSameOrBefore(data, 'day'),
        },
        arrayStringify: {
            type: 'string',
            errors: false,
            modifying: true,
            valid: true,
            compile() {
                return (data, dataPath, parentData, key) => {
                    parentData[key] = JSON.parse(data); //eslint-disable-line
                };
            },
        },
        isValidRange: {
            validate: (schemaValue, data) => {
                const numbers = data.trim().split(',');

                return +numbers[1] > +numbers[0];
            },
        },
        lowerCase: {
            type: 'string',
            errors: false,
            modifying: true,
            valid: true,
            compile() {
                return (data, dataPath, parentData, key) => {
                    parentData[key] = (data || '').toLowerCase(); //eslint-disable-line
                };
            },
        },
    };
};

const addKeywords = (...ajvs) => {
    const _validators = customValidator();

    for (const [key, opts] of Object.entries(_validators)) {
        for (const ajv of ajvs) {
            ajv.addKeyword(key, opts);
        }
    }
};

const validator = ({ schema, event, lang }) => {
    const {
        pathParameters = {},
        queryStringParameters = {},
        body = '{}',
    } = event;

    const _body = typeof body === 'string' ? JSON.parse(body) : body;
    const data = {
        ...JSON.parse(JSON.stringify(queryStringParameters)),
        ..._body,
        ...JSON.parse(JSON.stringify(pathParameters)),
    };

    if (!schema) {
        return {
            ...event,
            requestData: data,
        };
    }

    const { coerceTypes } = schema;
    const ajv = new Ajv({ format: 'full', allErrors: true, $data: true });
    const ajvCoerce = new Ajv({
        $data: true,
        format: 'full',
        allErrors: true,
        coerceTypes: true,
        useDefaults: true,
    });

    addKeywords(ajv, ajvCoerce);

    const _ajv = coerceTypes ? ajvCoerce : ajv;
    const validate = _ajv.compile(schema);
    const valid = validate(data);

    if (!valid) {
        localize[lang](validate.errors);
        const details = validate.errors.map((e) =>
            `${e.dataPath} ${e.message}`.trim()
        );

        throw AppError.GeneralInvalidParameters(details);
    }

    return {
        ...event,
        requestData: data,
    };
};

module.exports = validator;
