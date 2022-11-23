import { prismaClient } from '../types/common'
import { IUserRegister } from '../interfaces/user'

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
}