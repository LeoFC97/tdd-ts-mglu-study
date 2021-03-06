import supertest from 'supertest';
import startExpressServer from '../../drivers/http/server';

describe('Test health endpoints', () => {
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/health');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.post('/clientes');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/clientes');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/clientes/2');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.put('/clientes/2');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.delete('/clientes/2');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.post('/produtos');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.delete('/produtos/2');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/produtos');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.get('/produtos/2');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.put('/produtos/2');
    expect(result.statusCode).not.toBe(404);
  });
  test('Should not return 404 @ post order ', async () => {
    const apiMocked = await supertest(startExpressServer());
    const result = await apiMocked.post('/order');
    expect(result.statusCode).not.toBe(404);
  });
});
