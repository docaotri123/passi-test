interface IErrorObject {
    message: string,
    details?: Array<string>,
    data?: Array<any>
}

interface IPaginationCursor {
    take: number,
    skip?: number,
    cursor?: any,
    search?: any
}

interface IPagination {
    type: string,
    pagination: IPaginationCursor
}

export {
    IErrorObject,
    IPaginationCursor,
    IPagination
}