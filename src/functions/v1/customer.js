const { appWrapper } = require('../../services/appWrapper');
const { CustomerService } = require('../../services/v1/customer');
const { HttpStatus } = require('../../services/appError');
const { customersDTO } = require('../../dtos/v1/customer');

const customerService = new CustomerService();

const customerFns = {
  index: async (requestFunction) => {
    const { res, event } = requestFunction;
    const data = await customerService.index(event.requestData);
    console.log('test');

    res.status(HttpStatus.Ok).data(data);
  }
};

const index = appWrapper({ fn: customerFns.index, schema: customersDTO });

module.exports = { index };
