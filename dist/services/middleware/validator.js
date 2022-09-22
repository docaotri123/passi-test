"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = require("ajv");
const localize = require("ajv-i18n");
const AppError = require('../appError');
const isYoutubeLink = (url) => {
    const regexYoutubeLink = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/i;
    return regexYoutubeLink.test(url);
};
const customValidator = () => {
    return {
        youtubeLink: {
            validate: (schemaValue, data) => data ? isYoutubeLink(data) : true,
        }
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
    var _a;
    const { pathParameters = {}, queryStringParameters = {}, body = '{}', } = event;
    const _body = typeof body === 'string' ? JSON.parse(body) : body;
    const data = Object.assign(Object.assign(Object.assign({}, JSON.parse(JSON.stringify(queryStringParameters))), _body), JSON.parse(JSON.stringify(pathParameters)));
    if (!schema) {
        return Object.assign(Object.assign({}, event), { requestData: data });
    }
    const { coerceTypes } = schema;
    const ajv = new ajv_1.default({ formats: {}, allErrors: true, $data: true });
    const ajvCoerce = new ajv_1.default({
        $data: true,
        formats: {},
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
        const details = (_a = validate === null || validate === void 0 ? void 0 : validate.errors) === null || _a === void 0 ? void 0 : _a.map((e) => `${e.schemaPath} ${e.message}`.trim());
        throw AppError.GeneralInvalidParameters(details);
    }
    return Object.assign(Object.assign({}, event), { requestData: data });
};
exports.default = validator;
//# sourceMappingURL=validator.js.map