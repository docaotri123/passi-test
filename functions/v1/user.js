const appWrapper = require('../../services/appWrapper');
const { HttpStatus } = require('../../services/appError');
const UserService = require('../../services/v1/user');
const UserDtos = require('../../dtos/v1/user');

const userFns = {
    signUp: async ({ event, res }) => {
        const { requestData } = event;
        const data = await UserService.signUp(requestData);

        res.status(HttpStatus.Created).data(data);
    },
};

module.exports = {
    signUp: appWrapper({
        fn: userFns.signUp,
        schema: UserDtos.signUp
    }),

};