import {
    proxyHandler,
    requestFunction
} from '../../types/common';
import { appWrapper } from '../../services/appWrapper';
import InvoiceService from '../../services/v1/invoice';
import { HttpStatus } from '../../services/appError';
import { invoiceCreatedDTO, invoicesDTO } from '../../dtos/v1/invoice';

const invoiceService = new InvoiceService();

const invoiceFns = {
    create: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await invoiceService.create(requestData);

        res.status(HttpStatus.Created).data(data);
    },
    index: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const data = await invoiceService.index(event.requestData);

        res.status(HttpStatus.Ok).data(data);
    }
};

const create: proxyHandler = appWrapper({ fn: invoiceFns.create, schema: invoiceCreatedDTO });
const index: proxyHandler = appWrapper({ fn: invoiceFns.index, schema: invoicesDTO });

export { create, index };
