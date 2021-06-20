import Client from 'app/interfaces/entities/client/client';
import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpResponse } from '../../../../interfaces/http/http';
import GetAllClientsUseCase from '../../../../use-cases/client/getAll-client';

@injectable()
class GetAllClientsController implements Controller {
  constructor(
    private getAllClientsUseCase: GetAllClientsUseCase,
  ) { }
  async handle(): Promise<HttpResponse> {
    let httpResponse: HttpResponse = {
      body: '',
      status: 200,
    };
    try {
      const allClients:Client[] = await this.getAllClientsUseCase.execute();

      httpResponse = {
        body: {
          clients: allClients,
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

export default GetAllClientsController;
