import { container } from 'tsyringe';

import ClientMysqlBDRepository from './drivers/mysql/client/client-mysql.repository';
import ProductMysqlBDRepository from './drivers/mysql/product/product-mysql.repository';
import OrderMysqlBDRepository from './drivers/mysql/order/order-mysql.repository';

container.register('ClientRepository', {
  useClass: ClientMysqlBDRepository,
});
container.register('ProductRepository', {
  useClass: ProductMysqlBDRepository,
});
container.register('OrderRepository', {
  useClass: OrderMysqlBDRepository,
});

export default container;
