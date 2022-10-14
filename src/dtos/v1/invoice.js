
const invoiceCreatedDTO = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            enum: ['Q', 'I']
        },
        soldTo: {
            type: 'string',
            minLength: 1
        },
        invoiceDate: {
            type: 'number'
        },
        shipTo: {
            type: 'string',
            minLength: 1
        },
    },
    required: ['type', 'soldTo', 'invoiceDate', 'shipTo'],
    additionalProperties: false
};

const invoicesDTO = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            enum: ['Offset', 'Cursor'],
            default: 'Cursor',
            nullable: true
        },
        take: {
            type: 'number',
            default: 10,
            nullable: true
        },
        invoiceNumber: {
            type: 'number',
            nullable: true
        },
    },
    required: [],
    additionalProperties: false
};

const invoiceUpdatedDTO = {
    type: 'object',
    properties: {
        invoiceId: {
            type: 'number'
        },
        inventories: {
            type: 'array',
            maxItems: 20,
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    }
                },
                required: ['id'],
                additionalProperties: false,
            },
            nullable: true
        }
    },
    required: ['invoiceId'],
    additionalProperties: false
};

module.exports = { invoiceCreatedDTO, invoicesDTO, invoiceUpdatedDTO };
