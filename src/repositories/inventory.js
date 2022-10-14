
class InventoryRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }

    getInventoriesCursor(pagination) {
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

    getInventoriesByIds(ids) {
        return this.prisma.inventory.findMany({
            where: {
                Item_Number: { in: ids},
            }
        })
    }
}

module.exports = { InventoryRepository };