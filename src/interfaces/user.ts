interface IUserRegister {
    email: string,
    password: string,
    firstName: string
}

interface IAuthentication {
    email: string,
    password: string,
}

export {
    IUserRegister, IAuthentication
}