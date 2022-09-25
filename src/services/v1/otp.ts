import { AppError } from '../appError';
import { LambdaService } from '../../shared/aws/lambda'

export default class OTPService {
  private lambdaService: LambdaService;

  constructor () {
    this.lambdaService = new LambdaService();
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
  public async resendOTP(requestData: any) {
    if (requestData.test) {
      throw AppError.GeneralBadRequest();
    }

    if (requestData.trigger) {
      console.time("time-triggerSendOTP");
      const data = await this.lambdaService.invoke({
        body: {
          key: "value",
        },
        functionName: `${process.env.FUNCTION_PREFIX}-triggerSendOTP`,
        invokeType: requestData.trigger
      });
      console.log('data invoke: ', data);
      
      console.timeEnd("time-triggerSendOTP");
    }

    return { name: 'tri do' };
  }

  /**
   * resendOTP
   */
  public triggerSendOTP({ key }) {
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
