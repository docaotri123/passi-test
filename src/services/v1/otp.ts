import { AppError } from '../appError';
import { LambdaService } from '../../shared/aws/lambda'

export default class OTPService {
  private lambdaService: LambdaService;

  constructor () {
    this.lambdaService = new LambdaService();
  }

  /**
   * resendOTP
   */
  public async resendOTP(requestData: any) {
    if (requestData.test) {
      throw AppError.GeneralBadRequest();
    }

    if (requestData.trigger) {
      await this.lambdaService.invoke({
        body: {
            key: 'value',
        },
        functionName: `${process.env.FUNCTION_PREFIX}-triggerSendOTP`,
    });
    }

    return { name: 'tri do' };
  }

  /**
   * resendOTP
   */
  public triggerSendOTP({ key }) {
    console.log('triggerSendOTP: ', key);
    return { message: 'ok' };
  }
}
