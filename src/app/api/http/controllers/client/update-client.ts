import isEmpty from 'is-empty';
import { injectable } from 'tsyringe';
import ValidationError from '../../../../errors/validation';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import UpdateByIdUseCase from '../../../../use-cases/client/updateById-client';

@injectable()
class UpdateByIdClientsController implements Controller {
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
      if (!('name' in body) || !('cpf' in body) || !('name' in body) || !('email' in body)) {
        throw new ValidationError('Missing paramns, check API docs', 400);
      }
      const clientId:number = await this.updateByIdUseCase.execute(body, params?.id);

      httpResponse = {
        body: {
          clientIdUpdated: clientId,
        },
        status: 200,
      };
      return httpResponse;
    } catch (error) {
      console.log(error);
      httpResponse = {
        body: error,
        status: error.status,
      };
      return httpResponse;
    }
  }
}

export default UpdateByIdClientsController;
