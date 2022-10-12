import {
    proxyHandler,
    requestFunction
} from '../../types/common';
import { appWrapper } from '../../services/appWrapper';
import InventoryService from '../../services/v1/inventory';
import { HttpStatus } from '../../services/appError';
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
