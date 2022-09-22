declare type ErrorObject = {
    message: any;
    details: Array<string>;
    data: Array<any>;
};
export declare class AppError extends Error {
    private error;
    private status;
    private date;
    private details;
    private data;
    constructor(error: any, status: number, details?: Array<string>, stack?: string, data?: Array<any>);
    toString(): string;
    toJSON(): {
        status: any;
        error: ErrorObject;
    };
}
export {};
