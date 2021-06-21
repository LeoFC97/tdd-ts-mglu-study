import { injectable } from 'tsyringe';
import isEmpty from 'is-empty';
import Controller from '../../../../interfaces/http/controller';
import ValidationError from '../../../../errors/validation';
import ServiceUnavailable from '../../../../errors/serviceUnavailable';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import CreateOrderUseCase from '../../../../use-cases/order/create-order';
import SparkPostService from '../../../../services/sendmailWithSparkPost';
import StringValidator from '../../../../validators/stringValidator';

@injectable()
class CreateOrderController implements Controller {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
  ) { }

  // eslint-disable-next-line complexity
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    let httpResponse: HttpResponse = {
      body: '',
      status: 200,
    };
    try {
      const { body }:HttpRequest = httpRequest;

      if (!(typeof body === 'object') || isEmpty(body)) {
        throw new ValidationError('bodyShouldNotBeEmpty', 400);
      }
      if (!('code' in body) || !('date' in body) || !('comentary' in body) || !('paymentForm' in body)) {
        throw new ValidationError('Missing paramns, check API docs', 400);
      }
      if (body.sendMail === true) {
        await this.sendMail(body.user.email, body); // remove mock
      }
      // await this.createOrderUseCase.execute(body);
      httpResponse = {
        body: {
          message: 'Order successful created',
        },
        status: 200,
      };
      return httpResponse;
    } catch (error) {
      httpResponse = {
        body: error,
        status: error.status,
      };
      return httpResponse;
    }
  }
  async sendMail(emailToBeSended: string, body:unknown) {
    const emailSended: boolean = await SparkPostService.sendMailToSparkApi('new order', JSON.stringify(body), emailToBeSended);
    if (!emailSended) {
      throw new ServiceUnavailable('External service to send mail is uavailable now', 503);
    }
  }
}

export default CreateOrderController;
