import { prismaClient } from '../types/common'
import { IUserRegister } from '../interface/user'

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