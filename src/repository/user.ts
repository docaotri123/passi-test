import { prismaClient } from '../types/common'

export default class UserRepository {
    private prisma: prismaClient;

    constructor(prisma: prismaClient) {
        this.prisma = prisma;
    }

    public create({ userId, email, firstName, roleId }) {
        return this.prisma.user.create({
            data: {
                id: userId,
                email,
                firstName,
                roles: {
                    create: [
                        {
                            assignedBy: "",
                            role: {
                                connect: {
                                    id: roleId
                                }
                            }
                        }
                    ]
                }
            }
        })
    }

    /**
     * findById
     */
    public findById(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }
}