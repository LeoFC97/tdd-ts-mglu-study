import { mock } from 'jest-mock-extended';
import GetAllProductsUseCase from '../../../../use-cases/product/getAll-product';
import GetAllProductsController from './getAll-product';

describe('Test get all products Controller', () => {
  test('Should return status 200 and body to be defined', async () => {
    const mockedUsecase = mock<GetAllProductsUseCase>();
    const Sut = new GetAllProductsController(mockedUsecase);
    const result = await Sut.handle();
    expect(result.body).toBeDefined();
    expect(result.status).toBe(200);
  });
});
