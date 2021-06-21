import Order, { PymentTypes } from './order';
import Client from '../client/client';
import Product from '../product/product';

describe('Enruse types of Order interface', () => {
  test('Should make sure Order have the correct types', async () => {
    const mockedProduct1: Product = {
      code: '1',
      name: 'pencil sharpener',
      color: 'blue',
      size: 'Big',
      value: 12.40,
    };
    const mockedProduct2: Product = {
      code: '2',
      name: 'keyboard',
      color: 'black',
      size: 'small',
      value: 200.20,
    };
    const mockedClient: Client = {
      code: '1',
      name: 'Leonardo',
      cpf: '26845684255',
      sexo: 'Masculino',
      email: 'mockedemail@email.com',
    };
    const mockedOrder: Order = {
      code: '1',
      date: new Date(),
      comentary: 'Rapid ship please xD',
      paymentForm: PymentTypes.CASH,
      // clientWhoDidOrder: mockedClient,
      // product: [mockedProduct1, mockedProduct2],
    };
    expect(typeof mockedOrder.code).toBe('string');
    expect(typeof mockedOrder.date).toBe('object');
    expect(typeof mockedOrder.comentary).toBe('string');
    expect(typeof mockedOrder.paymentForm).toBe('string');
    // expect(typeof mockedOrder.clientWhoDidOrder).toBe('object');
    // expect(typeof mockedOrder.product).toBe('object');
  });
});
