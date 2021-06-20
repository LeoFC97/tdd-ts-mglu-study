import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import DeleteByIdUseCase from '../../../../use-cases/client/deleteById-client';

@injectable()
class DeleteByIdClientsController implements Controller {
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
      const clientWasSucessfulRemoved:boolean = await this.deleteByIdUseCase.execute(params?.id);

      httpResponse = {
        body: {
          clientWasRemoved: clientWasSucessfulRemoved,
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

export default DeleteByIdClientsController;
