import { createConnection } from '../../shared/prisma';
import InvoiceRepository from '../../repositories/invoice';
import InventoryRepository from '../../repositories/inventory';
import { IInvoiceCreated, IInvoices, IInvoiceUpdated } from '../../interfaces/invoice'

export default class InventoryService {
  private invoiceRepository: InvoiceRepository;
  private inventoryRepository: InventoryRepository;

  constructor() {
    const prisma = createConnection();
    this.invoiceRepository = new InvoiceRepository(prisma);
    this.inventoryRepository = new InventoryRepository(prisma);
  }

  public async create(requestData: IInvoiceCreated) {
    const invoice = await this.invoiceRepository.create(requestData);

    return {
      id: invoice.Invoice_Number
    };
  }

  public async update(requestData: IInvoiceUpdated) {
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

  public async index(requestData: IInvoices) {    
    const { type, take = 10, invoiceNumber } = requestData;
    
    if (type === 'Offset') {
      return [];
    }

    const pagination = { take, search: { invoiceNumber } };
    const data = await this.invoiceRepository.getInvoicesCursor(pagination);

    return data;
  }
}
