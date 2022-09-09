const { PrismaClient } = require('@prisma/client/edge')
const prisma = new PrismaClient();

module.exports.createConnection = () => {
    return prisma;
};

module.exports.closeConnection = async () => {
    if (prisma) {
        return prisma.$disconnect();
    }
};
