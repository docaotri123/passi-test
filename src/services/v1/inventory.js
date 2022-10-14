const { createConnection } = require('../../shared/prisma');
const { InventoryRepository } = require('../../repositories/inventory');

class InventoryService {
  constructor() {
    const prisma = createConnection();
    this.inventoryRepository = new InventoryRepository(prisma);
  }

  async index({ type, take = 10, description }) {    
    if (type === 'Offset') {
      return [];
    }

    const pagination = { take, search: { description } };
    const data = await this.inventoryRepository.getInventoriesCursor(pagination);

    return data;
  }
}

module.exports = { InventoryService };