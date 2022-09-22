export const log = (...args) => {
    if (process.env.LOG_DETAILS !== 'disabled') {
        // eslint-disable-next-line no-console
        console.log(...args);
    }
};