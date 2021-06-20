import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import DeleteByIdUseCase from '../../../../use-cases/product/deleteById-product';

@injectable()
class DeleteByIdProductController implements Controller {
  constructor(
    private deleteByIdUseCase: DeleteByIdUseCase,
  ) { }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    let httpResponse: HttpResponse = {
      body: '',
      status: 200,
    };
    try {
      const { params } = httpRequest;
      const productWasSucessfulRemoved:boolean = await this.deleteByIdUseCase.execute(params?.id);

      httpResponse = {
        body: {
          productWasRemoved: productWasSucessfulRemoved,
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

export default DeleteByIdProductController;
