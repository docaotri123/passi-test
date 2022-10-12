import { JSONSchemaType } from 'ajv'
import { IInventories } from '../../interfaces/inventory';

const inventoriesDTO: JSONSchemaType<IInventories> = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['Offset', 'Cursor'],
      default: 'Cursor',
      nullable: true
    },
    description: {
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

export { inventoriesDTO };
