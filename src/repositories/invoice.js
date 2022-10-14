class InvoiceRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }

    create(requestData) {
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

    createInvoiceLineItems(invoiceId, lineItems) {
        return this.prisma.invoice.update({
            where: {
                Invoice_Number: invoiceId
            },
            data: {
                Invoice_Lineitems: {
                    createMany: {
                        data: lineItems
                      },
                }
            }
        })
    }

    getInvoicesCursor(pagination) {
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

module.exports = {
    InvoiceRepository
}