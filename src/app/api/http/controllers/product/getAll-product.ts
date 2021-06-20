import product from 'app/interfaces/entities/product/product';
import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpResponse } from '../../../../interfaces/http/http';
import GetAllProductsUseCase from '../../../../use-cases/product/getAll-product';

@injectable()
class GetAllProductController implements Controller {
  constructor(
    private getAllproductsUseCase: GetAllProductsUseCase,
  ) { }
  async handle(): Promise<HttpResponse> {
    let httpResponse: HttpResponse = {
      body: '',
      status: 200,
    };
    try {
      const allProducts:product[] = await this.getAllproductsUseCase.execute();

      httpResponse = {
        body: {
          products: allProducts,
        },
        status: 200,
      };
      return httpResponse;
    } catch (error) {
      httpResponse = {
        body: error,
        status: 400,
      };
      return httpResponse;
    }
  }
}

export default GetAllProductController;
