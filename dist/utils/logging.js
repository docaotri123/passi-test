"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const log = (...args) => {
    if (process.env.LOG_DETAILS !== 'disabled') {
        console.log(...args);
    }
};
exports.log = log;
//# sourceMappingURL=logging.js.map