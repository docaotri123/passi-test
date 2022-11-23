import {
    proxyHandler,
    requestFunction
} from '../../types/common';
import { appWrapper } from '../../service/appWrapper';
import InventoryService from '../../service/v1/inventory';
import { HttpStatus } from '../../service/appError';
import { inventoriesDTO } from '../../dtos/v1/inventory'

const inventoryService = new InventoryService();

const inventoryFns = {
    index: async (requestFunction: requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await inventoryService.index(requestData);

        res.status(HttpStatus.Ok).data(data);
    }
};

const index: proxyHandler = appWrapper({ fn: inventoryFns.index, schema: inventoriesDTO });

export { index };
