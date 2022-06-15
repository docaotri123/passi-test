module.exports = {
    signUp: {
        properties: {
            phone: {
                type: 'string',
                lowerCase: true,
            },
            password: { type: 'string' },
        },
        required: ['phone', 'password'],
        coerceTypes: true,
        additionalProperties: false,
    },
    signIn: {
        properties: {
            phone: {
                type: 'string',
                lowerCase: true,
            },
            password: { type: 'string' }
        },
        required: ['phone', 'password'],
        coerceTypes: true,
        additionalProperties: false,
    },
}