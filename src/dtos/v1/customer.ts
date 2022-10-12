import { JSONSchemaType } from 'ajv'
import { ICustomers } from '../../interfaces/customer';

const customersDTO: JSONSchemaType<ICustomers> = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['Offset', 'Cursor'],
      default: 'Cursor',
      nullable: true
    },
    firstName: {
      type: 'string',
      minLength: 1,
      nullable: true
    },
    take: {
        type: 'number',
        default: 10,
        nullable: true
      }
  },
  required: [],
  additionalProperties: false
};

export { customersDTO };
