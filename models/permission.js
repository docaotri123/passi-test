const { mongoModel } = require('.');

const permissionSchema = {
    name: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
    },
    method: {
        type: String,
        required: true,
    },
    group: {
        type: String,
    },
    apiPath: {
        type: String,
        required: true,
    },
    gatewayPath: {
        type: String,
    },
    level: {
        type: String,
    },
    scope: {
        type: String,
    },
    rules: [
        {
            type: String,
        },
    ],
};

module.exports = mongoModel({
    name: 'Permission',
    schema: permissionSchema,
    options: {
        toJSON: {
            transform: (model) => {
                return {
                    id: model._id,
                    name: model.displayName,
                    level: model.level,
                    group: model.group,
                    scope: model.scope,
                    rules: model.rules,
                };
            },
        },
    }
});
