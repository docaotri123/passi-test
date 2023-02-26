
import { prismaClient } from '../src/types/common'
import { ROLE } from '../src/utils/constant';

export default class InitRole {
    private prisma: prismaClient;

    constructor(prisma: prismaClient) {
        this.prisma = prisma;
    }

    private async up() {
        const admin = await this.prisma.role.upsert({
            where: { name: ROLE.ADMIN },
            update: {},
            create: {
                name: ROLE.ADMIN,
            },
        });
        const buyer = await this.prisma.role.upsert({
            where: { name: ROLE.BUYER },
            update: {},
            create: {
                name: ROLE.BUYER,
            },
        });
        console.log({ admin, buyer });
    }

    public async seed() {
        const filename = 'init_roles';
        const seedFile = await this.prisma.seed.findUnique({ where: { filename } });

        if (seedFile) {
            return;
        }

        await this.up();
        await this.prisma.seed.create({
            data: {
                filename
            }
        });
    }
}