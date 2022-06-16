const { mongoModel } = require('.');

const roleSchema = ({ Schema }) => ({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: [
            'seller',
            'buyer',
            'admin'
        ],
        default: 'buyer',
    },
    permissions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Permission',
        },
    ],
});

module.exports = mongoModel({
    name: 'Role',
    schema: roleSchema,
    options: {
        toJSON: {
            transform: (model) => {
                const response = {
                    id: model._id,
                    name: model.name,
                    type: model.type,
                };

                if (model.permissions.length && model.permissions[0].name) {
                    response.permissions = model.permissions;
                }

                return response;
            },
        },
    }
});
