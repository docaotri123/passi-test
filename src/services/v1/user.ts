// import { createConnection } from '../../shared/prisma';
import { IAuthentication, IUserRegister } from '../../interfaces/user';
import { CognitoService } from '../../shared/aws/cognito';

export default class UserService {
    private cognitoService: CognitoService;

    constructor() {
       // const prisma = createConnection();
       this.cognitoService = new CognitoService();
    }

    public async signUp(requestData: IUserRegister) {
        const { email, password, firstName } = requestData;
        const { UserSub } = await this.cognitoService.signUp({ username: email, password });
        console.log(UserSub);

        return UserSub;
    }

    /**
     * authentication
     */
    public async authentication(requestData: IAuthentication) {
        const { email, password } = requestData;
        const result = await this.cognitoService.initiateAuth({ username: email, password });

        return { ...result };
    }
}
