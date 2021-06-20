import { mock } from 'jest-mock-extended';
import CreateClientUseCase from '../../../../use-cases/client/create-client';
import CreateClientController from './create-client';
import { HttpRequest } from '../../../../interfaces/http/http';

describe('Test controller Client', () => {
  test('Should return status 400 when send no body', async () => {
    const mockedUsecase = mock<CreateClientUseCase>();
    const Sut = new CreateClientController(mockedUsecase);
    const mockedRequest : HttpRequest = {
      body: {},
    };
    const result = await Sut.handle(mockedRequest);
    expect(result.status).toBe(400);
  });
  test('Should return status 200 when send correct body', async () => {
    const mockedUsecase = mock<CreateClientUseCase>();
    const Sut = new CreateClientController(mockedUsecase);
    const mockedRequest : HttpRequest = {
      body: {
        code: 1,
        name: 'leo',
        cpf: '14981258755',
        sexo: 'masculino',
        email: 'mock@mock.com',
      },
    };
    const result = await Sut.handle(mockedRequest);
    expect(result.status).toBe(200);
  });
});
