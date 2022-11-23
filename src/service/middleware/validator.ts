import Ajv from 'ajv';
import * as localize from 'ajv-i18n';
import { eventRequest } from '../../types/common';
import { AppError } from '../appError';

const isYoutubeLink = (url: string) => {
  const regexYoutubeLink =
    /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/i;

  return regexYoutubeLink.test(url);
};

const customValidator = () => {
  return {
    youtubeLink: {
      validate: (schemaValue, data) => (data ? isYoutubeLink(data) : true)
    }
  };
};

const addKeywords = (ajv: Ajv) => {
  const _validators = customValidator();

  for (const [keyword, opts] of Object.entries(_validators)) {
    ajv.addKeyword({
      keyword,
      validate: opts.validate
    });
  }
};

const validator = ({ schema, event, lang, coerceTypes }): eventRequest => {
  const {
    pathParameters = {},
    queryStringParameters = {},
    body = '{}'
  } = event;

  const _body = typeof body === 'string' ? JSON.parse(body) : body;
  const data = {
    ...JSON.parse(JSON.stringify(queryStringParameters)),
    ..._body,
    ...JSON.parse(JSON.stringify(pathParameters))
  };

  if (!schema) {
    return {
      ...event,
      requestData: data
    };
  }

  // learn more in here: https://ajv.js.org/options.html
  const ajv = new Ajv({
    $data: true,
    formats: {},
    allErrors: true,
    useDefaults: true,
    coerceTypes
  });

  addKeywords(ajv);

  const _ajv = ajv;
  const validate = _ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    localize[lang](validate.errors);
    const details = validate?.errors?.map((e) =>
      `${e.instancePath} ${e.message}`.trim()
    ) || [];

    throw AppError.GeneralInvalidParameters(details);
  }

  return {
    ...event,
    requestData: data
  };
};

export default validator;
