import {
  proxyHandler,
  requestFunction
} from '../../types/common';
import { appWrapper } from '../../service/appWrapper';
import CustomerService from '../../service/v1/customer';
import { HttpStatus } from '../../service/appError';
import { customersDTO } from '../../dtos/v1/customer'

const customerService = new CustomerService();

const customerFns = {
  index: async (requestFunction: requestFunction) => {
    const { res, event } = requestFunction;
    const data = await customerService.index(event.requestData);

    res.status(HttpStatus.Ok).data(data);
  }
};

const index: proxyHandler = appWrapper({ fn: customerFns.index, schema: customersDTO });

export { index };
