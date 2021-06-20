import isEmpty from 'is-empty';
import { injectable } from 'tsyringe';
import ValidationError from '../../../../errors/validation';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import UpdateByIdUseCase from '../../../../use-cases/product/updateById-product';

@injectable()
class UpdateByIdProductController implements Controller {
  constructor(
    private updateByIdUseCase: UpdateByIdUseCase,
  ) { }
  // eslint-disable-next-line complexity
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    let httpResponse: HttpResponse = {
      body: '',
      status: 200,
    };
    try {
      const { body, params }:HttpRequest = httpRequest;
      if (!(typeof body === 'object') || isEmpty(body)) {
        throw new ValidationError('bodyShouldNotBeEmpty', 400);
      }
      if (!('name' in body) || !('color' in body) || !('size' in body) || !('value' in body)) {
        throw new ValidationError('Missing paramns, check API docs', 400);
      }
      const productId:number = await this.updateByIdUseCase.execute(body, params?.id);

      httpResponse = {
        body: {
          productIdUpdated: productId,
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

export default UpdateByIdProductController;
