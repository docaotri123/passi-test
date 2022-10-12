import { createConnection } from '../../shared/prisma';
import InvoiceRepository from '../../repositories/invoice';
import { IInvoiceCreated, IInvoices } from '../../interfaces/invoice'

export default class InventoryService {
  private invoiceRepository: InvoiceRepository;

  constructor() {
    const prisma = createConnection();
    this.invoiceRepository = new InvoiceRepository(prisma);
  }

  public async create(requestData: IInvoiceCreated) {
    const invoice = await this.invoiceRepository.create(requestData);

    return {
      id: invoice.Invoice_Number
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
