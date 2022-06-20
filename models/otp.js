const { mongoModel } = require('.');
const { OPT_TYPE } = require('../utils/constant');

const otpSchema = ({ Schema }) => ({
    userId: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: false
    },
    usageCount: {
        type: Number,
        default: 3
    },
    type: {
        type: String,
        enum: [
            OPT_TYPE.SIGN_UP,
            OPT_TYPE.CHANGE_PASSWORD
        ]
    }
});

module.exports = mongoModel({
    name: 'Otp',
    schema: otpSchema,
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
