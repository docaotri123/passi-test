import { SQS } from 'aws-sdk'

export class SQSService {
    private sqs: SQS;

    constructor() {
        this.sqs = new SQS({
            region: 'ap-southeast-1'
        });
    }

    public sendMessage({ body, queue, delay, messageAttributes }) {
        const params = {
            MessageBody: JSON.stringify(body),
            QueueUrl: queue,
            DelaySeconds: delay,
            MessageAttributes: messageAttributes,
        };

        return this.sqs.sendMessage(params).promise();
    };
}