const { path } = require('ramda');

const captureHeaders = (event) => {
    // TO-DO integrate http-proxy
    const userId = ['local'].includes(process.env.NODE_ENV)
        ? path(['headers', 'jwt-userId'], event)
        : path(['requestContext', 'authorizer', 'jwt-userId'], event);
    const country =
        path(['headers', 'CloudFront-Viewer-Country'], event) || '';

    Object.assign(event.headers, {
        userId,
        country: country.toLowerCase(),
    });
};

module.exports = { captureHeaders };