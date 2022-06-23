const AWS = require('aws-sdk');

module.exports.sendMessage = (params) => {
    return new AWS.SNS({ region: 'ap-southeast-1',  accessKeyId: 'AKIA46Q4IX4AZKYPKIAD',
    secretAccessKey: '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', })
        .publish(params).promise();
};
