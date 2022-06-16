const { mongoModel } = require('.');

const userRoleSchema = ({ Schema }) => ({
    userId: {
        type: String,
        required: true,
    },
    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Role',
        },
    ],
});

module.exports = mongoModel({
    name: 'UserRole',
    schema: userRoleSchema,
    options: {
        toJSON: {
            transform: (model) => {
                return {
                    roles: model.roles,
                };
            },
        },
    },
    query: {
        byUserId(userId) {
            return this.where({ userId, deletedAt: 0 });
        },
    },
});
