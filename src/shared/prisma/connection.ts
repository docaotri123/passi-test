import { PrismaClient } from '@prisma/client'
let prisma: PrismaClient;

const createConnection = () => {
    if (!prisma) {
        prisma = new PrismaClient();
    }

    return prisma;
};

const closeConnection = async () => {
    if (prisma) {
        return prisma.$disconnect();
    }
};

export { createConnection, closeConnection, PrismaClient }