/* eslint-disable max-len */
import supertest from 'supertest';
import startExpressServer from '../../../drivers/http/server';

describe('Test health response', () => {
  test('Should body with datetime and database status on body', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/health');
    expect(result.body.datetime).toBeDefined();
    expect(result.body.databaseIsConnected).toBeDefined();
  });
});
