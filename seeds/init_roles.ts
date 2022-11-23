import * as path from 'path'
import { createConnection } from '../src/shared/prisma';
import { ROLE } from '../src/utils/constant';

const prisma = createConnection();
const up = async () => {
    const admin = await prisma.role.upsert({
        where: { name: ROLE.ADMIN },
        update: {},
        create: {
            name: ROLE.ADMIN,
        },
    });
    const buyer = await prisma.role.upsert({
        where: { name: ROLE.BUYER },
        update: {},
        create: {
            name: ROLE.BUYER,
        },
    });
    console.log({ admin, buyer });
};
 
export const seed = async () => {
    const filename = path.basename(__filename);
    const seedFile = await prisma.seed.findUnique({ where: { filename } });
    console.log(filename);

    if (seedFile) {
        return;
    }

    await up();
    await prisma.seed.create({
        data: {
            filename
        }
    });
};