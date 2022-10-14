const { createConnection } = require('../../shared/prisma');
const { CustomerRepository } = require('../../repositories/customer');

class CustomerService {
  constructor() {
    const prisma = createConnection();
    this.customerRepository = new CustomerRepository(prisma);
  }

  async index(requestData) {
    const { type, take = 10, firstName } = requestData;

    if (type === 'Offset') {
      return [];
    }

    console.time('test')
    const pagination = { take, search: { firstName } };
    const data = await this.customerRepository.getCustomers({ type: 'Cursor', pagination });
    console.timeEnd('test')

    return data;
  }
}

module.exports = { CustomerService };
