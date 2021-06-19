import Product from './product';

describe('Enruse types of Product interface', () => {
  test('Should make sure Product have the correct types', async () => {
    const mockedClient: Product = {
      code: '1',
      name: 'pencil sharpener',
      color: 'blue',
      size: 'Big',
      value: 12.40,
    };
    expect(typeof mockedClient.code).toBe('string');
    expect(typeof mockedClient.name).toBe('string');
    expect(typeof mockedClient.color).toBe('string');
    expect(typeof mockedClient.size).toBe('string');
    expect(typeof mockedClient.value).toBe('number');
  });
});
