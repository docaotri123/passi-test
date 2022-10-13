import { JSONSchemaType } from 'ajv'
import { IInvoiceCreated, IInvoices, IInvoiceUpdated } from '../../interfaces/invoice';

const invoiceCreatedDTO: JSONSchemaType<IInvoiceCreated> = {
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

const invoicesDTO: JSONSchemaType<IInvoices> = {
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

const invoiceUpdatedDTO: JSONSchemaType<IInvoiceUpdated> = {
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

export { invoiceCreatedDTO, invoicesDTO, invoiceUpdatedDTO };
