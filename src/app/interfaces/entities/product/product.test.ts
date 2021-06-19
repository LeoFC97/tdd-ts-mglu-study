import Product from './product';

describe('Enruse types of Product interface', () => {
  test('Should make sure Product have the correct types', async () => {
    const mockedProduct: Product = {
      code: '1',
      name: 'pencil sharpener',
      color: 'blue',
      size: 'Big',
      value: 12.40,
    };
    expect(typeof mockedProduct.code).toBe('string');
    expect(typeof mockedProduct.name).toBe('string');
    expect(typeof mockedProduct.color).toBe('string');
    expect(typeof mockedProduct.size).toBe('string');
    expect(typeof mockedProduct.value).toBe('number');
  });
});
