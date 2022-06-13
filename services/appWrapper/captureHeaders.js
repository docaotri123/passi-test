const R = require('ramda');

module.exports = (event) => {
    // TO-DO integrate http-proxy
    const userId = ['local'].includes(process.env.NODE_ENV)
        ? R.path(['headers', 'jwt-userId'], event)
        : R.path(['requestContext', 'authorizer', 'jwt-userId'], event);
    const country =
        R.path(['headers', 'CloudFront-Viewer-Country'], event) || '';

    Object.assign(event.headers, {
        userId,
        country: country.toLowerCase(),
    });
};
