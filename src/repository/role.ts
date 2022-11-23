import { prismaClient } from '../types/common'

export default class RoleRepository {
    private prisma: prismaClient;

    constructor(prisma: prismaClient) {
        this.prisma = prisma;
    }

    public findByName(name: string) {
        return this.prisma.role.findFirst({ where: { name } });
    }
}