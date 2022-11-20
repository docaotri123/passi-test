import * as CognitoIdentityServiceProvider from 'aws-sdk/clients/cognitoidentityserviceprovider';

// import { CognitoIdentityServiceProvider } from 'aws-sdk';

export class CognitoService {
    private cognitoIdentityServiceProvider: CognitoIdentityServiceProvider;
    private clientId: string;

    constructor() {
        this.cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider({
            region: 'ap-southeast-1'
        })
        this.clientId = process.env.COGNITO_CLIENT_ID || '';
    }

    public async signUp({ username, password }) {
        const params = {
            ClientId: this.clientId,
            Password: password,
            Username: username,
            UserAttributes: [
                {
                    Name: 'email',
                    Value: username,
                }
            ],
        };
    
        return this.cognitoIdentityServiceProvider
            .signUp(params)
            .promise();
    };
  }