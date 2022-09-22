import Ajv from 'ajv';
import * as localize from 'ajv-i18n';
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

  const { coerceTypes } = schema;
  // learn more in here: https://ajv.js.org/options.html
  const ajv = new Ajv({ formats: {}, allErrors: true, $data: true });
  const ajvCoerce = new Ajv({
    $data: true,
    formats: {},
    allErrors: true,
    useDefaults: true
  });

  addKeywords(ajv, ajvCoerce);

  const _ajv = coerceTypes ? ajvCoerce : ajv;
  const validate = _ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    localize[lang](validate.errors);
    const details = validate?.errors?.map((e) =>
      `${e.schemaPath} ${e.message}`.trim()
    );

    // throw AppError.GeneralInvalidParameters(details);
    throw "";
  }

  return {
    ...event,
    requestData: data
  };
};

export default validator;
