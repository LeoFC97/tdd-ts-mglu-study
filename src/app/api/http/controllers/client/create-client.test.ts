// /* eslint-disable max-len */
// import supertest from 'supertest';
// import startExpressServer from '../../../../drivers/http/server';
// import CreateClientController from './create-client';
// import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
// import UseCase from 'app/interfaces/use-case';

// describe('Test health response', () => {
//   test('Should body with datetime and database status on body', async () => {
//     const mockedUsecase: UseCase = {};
//     const Sut = new CreateClientController(mockedUsecase);
//     const mockedRequest : HttpRequest = {
//       body: {
//         client: {
//           name: 'Mocked Client Name',
//         },
//       },
//     };
//     console.log(Sut.handle(mockedRequest));
//     const apiMocked = await supertest(startExpressServer());
//     const result = await apiMocked.get('/health');
//     expect(result.statusCode).not.toBe(404);
//     expect(true).toBe(false);
//   });
// });
