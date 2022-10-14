
class CustomerRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }

    getCustomers(requestData) {
        const { take, skip, cursor, search } = requestData.pagination;
        const query = {
            take
        };

        if (search['firstName']) {
            query['where'] = {
                First_Name: {
                    contains: search['firstName']
                }
            }
        }

        if (skip) {
            query['skip'] = skip;
        }

        if (cursor) {
            query['cursor'] = cursor;
        }

        query['orderBy'] = {
            Customer_Number: 'asc'
        }

        return this.prisma.customers.findMany(query);
    }
}

module.exports = { CustomerRepository };