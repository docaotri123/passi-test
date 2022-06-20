const { mongoModel } = require('.');

const userSchema = ({ Schema }) => ({
    userId: {
        type: String,
        require: true
    },
    fullName: {
        type: String,
        default: ''
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    birthday: {
        type: Number
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        require: true
    },
    avatar: {
        type: String
    },
    lastLogin: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoModel({
    name: 'User',
    schema: userSchema,
    options: {
        toJSON: {
            transform: (model) => {
                const response = {
                    id: model._id,
                    fullName: model.fullName,
                    firstName: model.firstName,
                    lastName: model.lastName,
                    gender: model.gender,
                    birthday: model.birthday,
                    email: model.email,
                    phone: model.phone,
                    avatar: model.avatar,
                    lastLogin: model.lastLogin
                };

                return response;
            },
        },
    }
});
