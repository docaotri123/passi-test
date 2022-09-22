import { path } from 'ramda'

export const captureHeaders = (event) => {
    // TO-DO integrate http-proxy
    const userId = ['local'].includes(process.env.NODE_ENV as string)
        ? path<string>(['headers', 'jwt-userId'], event)
        : path<string>(['requestContext', 'authorizer', 'jwt-userId'], event);
    const country =
        path<string>(['headers', 'CloudFront-Viewer-Country'], event) || '';

    Object.assign(event.headers, {
        userId,
        country: country.toLowerCase(),
    });
};
