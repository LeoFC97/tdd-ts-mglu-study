import { mock } from 'jest-mock-extended';
import CreateOrderUseCase from '../../../../use-cases/order/create-order';
import CreateOrderontroller from './create-order';
import { HttpRequest } from '../../../../interfaces/http/http';
import SparkPostService from '../../../../services/sendmailWithSparkPost';

describe('Test Order controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Should return status 400 when send no body', async () => {
    const mockedUsecase = mock<CreateOrderUseCase>();
    const Sut = new CreateOrderontroller(mockedUsecase);
    const mockedRequest : HttpRequest = {
      body: {},
    };
    const result = await Sut.handle(mockedRequest);
    expect(result.status).toBe(400);
  });
  test('Should return status 200 when send correct body', async () => {
    const mockedUsecase = mock<CreateOrderUseCase>();
    const Sut = new CreateOrderontroller(mockedUsecase);
    const mockedRequest : HttpRequest = {
      body: {
        code: 1,
        date: 'leo',
        comentary: '14981258755',
        paymentForm: 'masculino',
      },
    };
    const result = await Sut.handle(mockedRequest);
    expect(result.status).toBe(200);
  });
  test('Should call mocked funcion 1 time', async () => {
    const mockedUsecase = mock<CreateOrderUseCase>();
    const spyFunction = jest.spyOn(SparkPostService, 'sendMailToSparkApi');
    const sut = new CreateOrderontroller(mockedUsecase);
    const mockedRequest : HttpRequest = {
      body: {
        code: 1,
        date: 'leo',
        comentary: '14981258755',
        paymentForm: 'masculino',
        sendMail: true,
      },
    };
    sut.handle(mockedRequest);
    expect(spyFunction).toHaveBeenCalledTimes(1);
  });
  test('Should call mocked funcion 0 times', async () => {
    const mockedUsecase = mock<CreateOrderUseCase>();
    const spyFunction = jest.spyOn(SparkPostService, 'sendMailToSparkApi');
    const Sut = new CreateOrderontroller(mockedUsecase);
    const mockedRequest : HttpRequest = {
      body: {
        code: 1,
        date: 'leo',
        comentary: '14981258755',
        paymentForm: 'masculino',
        sendMail: false,
      },
    };
    await Sut.handle(mockedRequest);
    expect(spyFunction).toHaveBeenCalledTimes(0);
  });
});
