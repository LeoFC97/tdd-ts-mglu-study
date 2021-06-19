import Client from './client';

describe('Enruse types of Client interface', () => {
  test('Should make sure Client have the correct types', async () => {
    const mockedClient: Client = {
      code: '1',
      name: 'Leonardo',
      cpf: '26845684255',
      sexo: 'Masculino',
      email: 'mockedemail@email.com',
    };
    expect(typeof mockedClient.code).toBe('string');
    expect(typeof mockedClient.name).toBe('string');
    expect(typeof mockedClient.cpf).toBe('string');
    expect(typeof mockedClient.sexo).toBe('string');
    expect(typeof mockedClient.email).toBe('string');
  });
});
