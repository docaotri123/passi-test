const { createConnection } = require('../../shared/prisma');
const { InvoiceRepository } = require('../../repositories/invoice');
const { InventoryRepository } = require('../../repositories/inventory');

class InvoiceService {
  constructor() {
    const prisma = createConnection();
    this.invoiceRepository = new InvoiceRepository(prisma);
    this.inventoryRepository = new InventoryRepository(prisma);
  }

  async create(requestData) {
    const invoice = await this.invoiceRepository.create(requestData);

    return {
      id: invoice.Invoice_Number
    };
  }

  async update(requestData) {
    const invoiceId = requestData.invoiceId;
    const inventoryIds = requestData.inventories?.map(({ id }) => id) || [];
    const inventory = await this.inventoryRepository.getInventoriesByIds(inventoryIds);
    const lineItems = inventory.map((item) => ({
      Description: item.Description,
      Model: item.Model,
      Cost: item.Cost ? +item.Cost : 0,
      Item_Number: item.Item_Number,
      Line_Number: Math.floor(Math.random() * 1000000000)
    }));
    const result = await this.invoiceRepository.createInvoiceLineItems(invoiceId, lineItems);

    return {
      status: 'ok'
    };
  }

  async index(requestData) {
    const { type, take = 10, invoiceNumber } = requestData;

    if (type === 'Offset') {
      return [];
    }

    const pagination = { take, search: { invoiceNumber } };
    const data = await this.invoiceRepository.getInvoicesCursor(pagination);

    return data;
  }
}

module.exports = { InvoiceService };