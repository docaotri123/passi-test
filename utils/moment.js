const moment = require('moment');

module.exports.getMoment = () => {
    return moment();
}

module.exports.addTime = (datetime, unit, value) => {
    const addUnitValue = {
        'd': moment(datetime).add(value, 'days'),
        'w': moment(datetime).add(value, 'weeks'),
        'm': moment(datetime).add(value, 'months'),
        'y': moment(datetime).add(value, 'years'),
    };

    return addUnitValue[unit];
};

module.exports.getFormat = (datetime, format) => {
    return moment(datetime).format(format);
}