import { injectable } from 'tsyringe';
import isEmpty from 'is-empty';
import Controller from '../../../../interfaces/http/controller';
import ValidationError from '../../../../errors/validation';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import CreateProductUseCase from '../../../../use-cases/product/create-product';

@injectable()
class CreateProductController implements Controller {
  constructor(
    private createProductUseCase: CreateProductUseCase,
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
      if (!('code' in body) || !('name' in body) || !('color' in body) || !('size' in body) || !('value' in body)) {
        throw new ValidationError('Missing paramns, check API docs', 400);
      }
      await this.createProductUseCase.execute(body);
      httpResponse = {
        body: {
          message: 'Product successful created',
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
}

export default CreateProductController;
