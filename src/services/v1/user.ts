import { createConnection } from '../../shared/prisma';
import { IAuthentication, IConfirmSignUp, IUserRegister } from '../../interfaces/user';
import { CognitoService } from '../../shared/aws/cognito';
import RoleRepository from '../../repositories/role';
import UserRepository from '../../repositories/user';
import { ROLE } from '../../utils/constant';

export default class UserService {
    private cognitoService: CognitoService;
    private roleRepository: RoleRepository;
    private userRepository: UserRepository;

    constructor() {
        const prisma = createConnection();
        this.cognitoService = new CognitoService();
        this.userRepository = new UserRepository(prisma);
        this.roleRepository = new RoleRepository(prisma);
    }

    public async signUp(requestData: IUserRegister) {
        const { email, password } = requestData;
        const [{ UserSub }, role] = await Promise.all([
            this.cognitoService.signUp({ username: email, password }),
            this.roleRepository.findByName(ROLE.BUYER)
        ]);

        if (!role) {
            throw new Error("");
        }

        const user = await this.userRepository.create({ ...requestData, userId: UserSub, roleId: role.id });

        return user;
    }

    /**
     * authentication
     */
    public async authentication(requestData: IAuthentication) {
        const { email, password } = requestData;
        const result = await this.cognitoService.initiateAuth({ username: email, password });

        return { ...result };
    }

    /**
     * confirmSignUp
     */
    public async confirmSignUp(requestData: IConfirmSignUp) {
        const { email, code } = requestData;

        await this.cognitoService.userConfirmSignUp({ username: email, code });

        return { status: 'ok' };
    }
}
