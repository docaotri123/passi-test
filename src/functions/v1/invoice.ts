import {
    proxyHandler,
    requestFunction
} from '../../types/common';
import { appWrapper } from '../../service/appWrapper';
import InvoiceService from '../../service/v1/invoice';
import { HttpStatus } from '../../service/appError';
import { invoiceCreatedDTO, invoicesDTO, invoiceUpdatedDTO } from '../../dtos/v1/invoice';

const invoiceService = new InvoiceService();

const invoiceFns = {
    create: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await invoiceService.create(requestData);

        res.status(HttpStatus.Created).data(data);
    },
    update: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await invoiceService.update(requestData);

        res.status(HttpStatus.NoContent).data(data);
    },
    index: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const data = await invoiceService.index(event.requestData);

        res.status(HttpStatus.Ok).data(data);
    }
};

const create: proxyHandler = appWrapper({ fn: invoiceFns.create, schema: invoiceCreatedDTO });
const index: proxyHandler = appWrapper({ fn: invoiceFns.index, schema: invoicesDTO });
const update: proxyHandler = appWrapper({ fn: invoiceFns.update, schema: invoiceUpdatedDTO });

export { create, index, update };
