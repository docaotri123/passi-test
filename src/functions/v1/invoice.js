const { appWrapper } = require('../../services/appWrapper');
const { InvoiceService } = require('../../services/v1/invoice');
const { HttpStatus } = require('../../services/appError');
const { invoiceCreatedDTO, invoicesDTO, invoiceUpdatedDTO } = require('../../dtos/v1/invoice');

const invoiceService = new InvoiceService();

const invoiceFns = {
    create: async (requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await invoiceService.create(requestData);

        res.status(HttpStatus.Created).data(data);
    },
    update: async (requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await invoiceService.update(requestData);

        res.status(HttpStatus.NoContent).data(data);
    },
    index: async (requestFunction) => {
        const { res, event } = requestFunction;
        const data = await invoiceService.index(event.requestData);

        res.status(HttpStatus.Ok).data(data);
    }
};

const create = appWrapper({ fn: invoiceFns.create, schema: invoiceCreatedDTO });
const index = appWrapper({ fn: invoiceFns.index, schema: invoicesDTO });
const update = appWrapper({ fn: invoiceFns.update, schema: invoiceUpdatedDTO });

module.exports = { create, index, update };
