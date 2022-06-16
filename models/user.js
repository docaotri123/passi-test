const { mongoModel } = require('.');

const roleSchema = ({ Schema }) => ({
    fullName: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
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
});

module.exports = mongoModel({
    name: 'Role',
    schema: roleSchema,
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
                    avatar: model.avatar
                };

                return response;
            },
        },
    }
});
