import { PrismaClient } from '@prisma/client'
import { ROLE } from '../src/utils/constant';
const prisma = new PrismaClient()

async function initRoles() {
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
}

async function main() {
    await initRoles();
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });