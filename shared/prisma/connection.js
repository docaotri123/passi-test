const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ]
});

prisma.$on('query', (e) => {
    console.log('Query: ', e);
  })

module.exports.createConnection = () => {
    return prisma;
};

module.exports.closeConnection = async () => {
    if (prisma) {
        return prisma.$disconnect();
    }
};
