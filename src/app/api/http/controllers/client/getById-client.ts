import Client from 'app/interfaces/entities/client/client';
import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import GetByIdClientsUseCase from '../../../../use-cases/client/getById-client';

@injectable()
class GetByIdClientsController implements Controller {
  constructor(
    private getByIdClientsUseCase: GetByIdClientsUseCase,
  ) { }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    let httpResponse: HttpResponse = {
      body: '',
      status: 200,
    };
    try {
      const { params } = httpRequest;
      const userId = params?.id;
      const client:Client = await this.getByIdClientsUseCase.execute(userId);

      httpResponse = {
        body: {
          client,
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

export default GetByIdClientsController;
