import { JSONSchemaType } from 'ajv'
import { IInvoiceCreated, IInvoices } from '../../interfaces/invoice';

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


export { invoiceCreatedDTO, invoicesDTO };
