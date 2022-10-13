import { prismaClient } from '../types/common'
import { IPaginationCursor } from '../interfaces/common'

export default class InventoryRepository {
    private prisma: prismaClient;

    constructor(prisma: prismaClient) {
        this.prisma = prisma;
    }

    public getInventoriesCursor(pagination: IPaginationCursor) {
        const { take, skip, cursor, search } = pagination;
        const query = {
            take
        };

        if (search['description']) {
            query['where'] = {
                Description: {
                    contains: search['description']
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
            Item_Number: 'asc'
        }

        return this.prisma.inventory.findMany(query);
    }

    public getInventoriesByIds(ids: string[]) {
        return this.prisma.inventory.findMany({
            where: {
                Item_Number: { in: ids},
            }
        })
    }
}