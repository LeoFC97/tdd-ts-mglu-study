import { mock } from 'jest-mock-extended';
import GetAllClientsUseCase from '../../../../use-cases/client/getAll-client';
import GetAllClientsController from './getAll-client';

describe('Test controller Client', () => {
  test('Should return status 200 when send correct body', async () => {
    const mockedUsecase = mock<GetAllClientsUseCase>();
    const Sut = new GetAllClientsController(mockedUsecase);
    const result = await Sut.handle();
    expect(result.body).toBeDefined();
    expect(result.status).toBe(200);
  });
});
