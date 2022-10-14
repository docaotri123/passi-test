const { SQS } = require('aws-sdk')

class SQSService {
    constructor() {
        this.sqs = new SQS({
            region: 'ap-southeast-1'
        });
    }

    sendMessage({ body, queue, delay, messageAttributes }) {
        const params = {
            MessageBody: JSON.stringify(body),
            QueueUrl: queue,
            DelaySeconds: delay,
            MessageAttributes: messageAttributes,
        };

        return this.sqs.sendMessage(params).promise();
    };
}

module.exports = { SQSService }