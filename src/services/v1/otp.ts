import { AppError } from '../appError';
import { LambdaService } from '../../shared/aws/lambda'
import { SQSService } from '../../shared/aws/sqs'
import { IResendOTP } from '../../interfaces/otp';

export default class OTPService {
  private lambdaService: LambdaService;
  private sqsService: SQSService;

  constructor () {
    this.lambdaService = new LambdaService();
    this.sqsService = new SQSService();
  }

  /**
   * privateAPI
   */
  public privateAPI() {
    return { message: 'private API' }
  }

  /**
   * resendOTP
   */
  public async resendOTP(requestData: IResendOTP) {
    if (requestData['test']) {
      throw AppError.GeneralBadRequest();
    }

    if (requestData['trigger']) {
      console.time("time-triggerSendOTP");
      const data = await this.lambdaService.invoke({
        body: {
          key: "value",
        },
        functionName: `${process.env.FUNCTION_PREFIX}-triggerSendOTP`,
        invokeType: requestData['trigger']
      });
      console.log('data invoke: ', data);
      
      console.timeEnd("time-triggerSendOTP");
    }

    if (requestData['sqs']) {
      const messageAttributes = {
        type: {
          DataType: 'String',
          StringValue: 'reset_pw',
        },
      };

      await this.sqsService.sendMessage({
        body: { name: 'tri', age: 25 },
        queue: process.env.SEND_OTP_QUEUE_URL,
        delay: 0,
        messageAttributes
      });
    } 

    return { name: 'tri do cao' };
  }

  /**
   * sendOtpSQS
   */
  public async sendOtpSQS(records: Array<any>) {
    const [record] = records;
    const { body, messageAttributes } = record;
    console.log(body);
    console.log(messageAttributes);

    return { message: 'ok' };
  }

  /**
   * resendOTP
   */
  public async triggerSendOTP({ key }) {
    console.time('sleep');
    this.sleep(5000);
    console.timeEnd('sleep');
    return { message: 'ok' };
  }

  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = 0;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
}
