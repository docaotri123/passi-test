const { appWrapper } = require('../../services/appWrapper');
const { InventoryService } = require('../../services/v1/inventory');
const { HttpStatus } = require('../../services/appError');
const { inventoriesDTO } = require('../../dtos/v1/inventory');

const inventoryService = new InventoryService();

const inventoryFns = {
    index: async (requestFunction) => {
        const { res, event } = requestFunction;
        const { requestData } = event;
        const data = await inventoryService.index(requestData);

        res.status(HttpStatus.Ok).data(data);
    }
};

const index = appWrapper({ fn: inventoryFns.index, schema: inventoriesDTO });

module.exports = { index };
