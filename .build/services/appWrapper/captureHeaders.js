"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captureHeaders = void 0;
const ramda_1 = require("ramda");
const captureHeaders = (event) => {
    const userId = ['local'].includes(process.env.NODE_ENV)
        ? (0, ramda_1.path)(['headers', 'jwt-userId'], event)
        : (0, ramda_1.path)(['requestContext', 'authorizer', 'jwt-userId'], event);
    const country = (0, ramda_1.path)(['headers', 'CloudFront-Viewer-Country'], event) || '';
    Object.assign(event.headers, {
        userId,
        country: country.toLowerCase(),
    });
};
exports.captureHeaders = captureHeaders;
//# sourceMappingURL=captureHeaders.js.map