import { prismaClient } from '../types/common'
import { IInvoiceCreated } from '../interfaces/invoice'
import { IPaginationCursor } from '../interfaces/common'

export default class CustomerRepository {
    private prisma: prismaClient;

    constructor(prisma: prismaClient) {
        this.prisma = prisma;
    }

    public create(requestData: IInvoiceCreated) {
        return this.prisma.invoice.create({
            data: {
                Type: requestData.type,
                Sold_to_Customer: requestData.soldTo,
                Ship_to_Customer: requestData.shipTo,
                Invoice_Date: new Date(requestData.invoiceDate).toDateString(),
                Invoice_Number: Math.floor(Math.random() * 1000000000000)
            }
        })
    }

    public getInvoicesCursor(pagination: IPaginationCursor) {
        const { take, skip, cursor, search } = pagination;
        const query = {
            take
        };

        if (search['invoiceNumber']) {
            query['where'] = {
                Invoice_Number: search['invoiceNumber']
            }
        }

        if (skip) {
            query['skip'] = skip;
        }

        if (cursor) {
            query['cursor'] = cursor;
        }

        query['orderBy'] = {
            Invoice_Number: 'asc'
        }

        return this.prisma.invoice.findMany(query);
    }
}