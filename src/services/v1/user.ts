// import { createConnection } from '../../shared/prisma';
import { IUserRegister } from '../../interfaces/user';
import { CognitoService } from '../../shared/aws/cognito';

export default class UserService {
    private cognitoService: CognitoService;

    constructor() {
        // const prisma = createConnection();
        this.cognitoService = new CognitoService();
    }

    public async signUp(requestData: IUserRegister) {
        const { email, password, firstName } = requestData;
        // const { UserSub } = await this.cognitoService.signUp({ username: email, password });
        // console.log(UserSub);

        // return UserSub;
        return true;
    }
}
