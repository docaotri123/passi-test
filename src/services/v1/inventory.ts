import { createConnection } from '../../shared/prisma';
import InventoryRepository from '../../repositories/inventory';
import { IInventories } from '../../interfaces/inventory'

export default class InventoryService {
  private inventoryRepository: InventoryRepository;

  constructor() {
    const prisma = createConnection();
    this.inventoryRepository = new InventoryRepository(prisma);
  }

  public async index(requestData: IInventories) {    
    const { type, take = 10, description } = requestData;
    
    if (type === 'Offset') {
      return [];
    }

    const pagination = { take, search: { description } };
    const data = await this.inventoryRepository.getInventoriesCursor(pagination);

    return data;
  }
}
