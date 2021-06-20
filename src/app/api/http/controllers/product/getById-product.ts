import { injectable } from 'tsyringe';
import Product from '../../../../interfaces/entities/product/product';
import Controller from '../../../../interfaces/http/controller';
import { HttpResponse, HttpRequest } from '../../../../interfaces/http/http';
import GetByIdProductssUseCase from '../../../../use-cases/product/getById-product';

@injectable()
class GetByIdProductController implements Controller {
  constructor(
    private getByIdProductUseCase: GetByIdProductssUseCase,
  ) { }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    let httpResponse: HttpResponse = {
      body: '',
      status: 200,
    };
    try {
      const { params } = httpRequest;
      const userId = params?.id;
      const product:Product = await this.getByIdProductUseCase.execute(userId);

      httpResponse = {
        body: {
          product,
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

export default GetByIdProductController;
