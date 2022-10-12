import { createConnection } from '../../shared/prisma';
import CustomerRepository from '../../repositories/customer';
import { ICustomers } from '../../interfaces/customer'

export default class CustomerService {
  private customerRepository: CustomerRepository;

  constructor() {
    const prisma = createConnection();
    this.customerRepository = new CustomerRepository(prisma);
  }

  public async index(requestData: ICustomers) {
    const { type, take = 10, firstName } = requestData;

    if (type === 'Offset') {
      return [];
    }

    const pagination = { take, search: { firstName } };
    const data = await this.customerRepository.getCustomers({ type: 'Cursor', pagination });

    return data;
  }
}
