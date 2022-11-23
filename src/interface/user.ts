interface IUserRegister {
    email: string,
    password: string,
    firstName: string
}

interface IAuthentication {
    email: string,
    password: string,
}

interface IConfirmSignUp {
    email: string,
    code: string
}

export {
    IUserRegister, IAuthentication, IConfirmSignUp
}