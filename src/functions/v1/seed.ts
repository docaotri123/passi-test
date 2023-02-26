
import SeedService from "../../service/v1/seed";

const seedService = new SeedService();

const seedFns = {
    create: async (event: any, context: any, callback) => {
        context.callbackWaitsForEmptyEventLoop = false;

        await seedService.create();

        callback(null, { body: JSON.stringify({ message: 'ok' }) });
    },
};

const create = seedFns.create;

export { create };
