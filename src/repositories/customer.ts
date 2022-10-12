import { prismaClient } from '../types/common'
import { IPagination} from '../interfaces/common'

export default class CustomerRepository {
    private prisma: prismaClient;

    constructor(prisma: prismaClient) {
        this.prisma = prisma;
    }

    public getCustomers(requestData: IPagination) {
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