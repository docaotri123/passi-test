module.exports = {
    signUp: {
        properties: {
            email: {
                type: 'string',
                format: 'email',
                lowerCase: true,
            },
            password: { type: 'string' },
        },
        required: ['email', 'password', 'firstName', 'lastName', 'roleName'],
        coerceTypes: true,
        additionalProperties: false,
    }
}