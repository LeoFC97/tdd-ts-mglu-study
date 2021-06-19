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

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    let httpResponse: HttpResponse = {
      body: '',
      status: 200,
    };

    const { body } = httpRequest;

    if (!(typeof body === 'object') || isEmpty(body)) {
      console.log('entrou aqui');
      const error = new ValidationError('bodyShouldNotBeEmpty');
      httpResponse = {
        body: error,
        status: 400,
      };
      return httpResponse;
    }

    console.log(body);

    const teste = await this.createClientUseCase.execute(body);

    console.log(teste);
    httpResponse = {
      body: {
        datetime: new Date(),
        teste,
      },
      status: 200,
    };
    return httpResponse;
  }
}

export default CreateClientController;
