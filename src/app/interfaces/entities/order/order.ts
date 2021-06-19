import Client from '../client/client';
import Product from '../product/product';

export enum PymentTypes {
  CASH = 'cash',
  CARD = 'card',
  check = 'check',
}

export default interface Order {
  code: string,
  date: Date,
  comentary: string,
  paymentForm: PymentTypes,
  clientWhoDidOrder: Client,
  product: Product[],
}
