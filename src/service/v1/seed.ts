import { createConnection } from '../../shared/prisma';
import { InitRole } from '../../../seeds';

export default class SeedService {
    initRole: InitRole;

    constructor() {
        const prisma = createConnection();
        this.initRole = new InitRole(prisma);
    }

    public async create() {
       await this.initRole.seed();
    }
}
