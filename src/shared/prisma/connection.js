const { PrismaClient } = require('@prisma/client');
let prisma;

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

module.exports = { createConnection, closeConnection }