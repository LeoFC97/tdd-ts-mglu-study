import { injectable } from 'tsyringe';
import isEmpty from 'is-empty';
import Controller from '../../../../interfaces/http/controller';
import ValidationError from '../../../../errors/validation';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import CreateClientUseCase from '../../../../use-cases/client/create-client';

@injectable()
class CreateClientController implements Controller {
  constructor(
    private createClientUseCase: CreateClientUseCase,
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
      if (!('code' in body) || !('name' in body) || !('cpf' in body) || !('name' in body) || !('email' in body)) {
        throw new ValidationError('Missing paramns, check API docs', 400);
      }
      await this.createClientUseCase.execute(body);
      httpResponse = {
        body: {
          message: 'Client successful created',
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

export default CreateClientController;
