/* eslint-disable max-len */
import supertest from 'supertest';
import startExpressServer from '../../../drivers/http/server';
import MysqlDBManager from '../../../drivers/mysql/mysql-manager';
import { mysql } from '../../../../config/enviroment';

describe('Test health response', () => {
  beforeAll(async () => {
    mysql.database = 'mockedDatabase';
    await MysqlDBManager.initialize();
  });
  afterAll(async () => {
    await MysqlDBManager.closeConnection();
  });
  test('Should body with datetime and database status on body', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/health');
    expect(result.body.datetime).toBeDefined();
    expect(result.body.databaseIsConnected).toBeDefined();
  });
});
