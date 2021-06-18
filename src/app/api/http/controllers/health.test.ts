/* eslint-disable max-len */
import supertest from 'supertest';
import startExpressServer from '../../../drivers/http/server';
import MysqlDBManager from '../../../drivers/mysql/mysql-manager';

describe('Test health response', () => {
  beforeAll(async () => {
    process.env.MYSQL_DATABASE = 'mockedDatabase';
    process.env.MYSQL_HOST = '127.0.0.1';
    process.env.MYSQL_PORT = '3306';
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
