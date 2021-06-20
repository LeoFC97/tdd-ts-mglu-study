import { container } from 'tsyringe';

import ClientMysqlBDRepository from './drivers/mysql/client/client-mysql.repository';
import ProductMysqlBDRepository from './drivers/mysql/product/product-mysql.repository';

container.register('ClientRepository', {
  useClass: ClientMysqlBDRepository,
});
container.register('ProductRepository', {
  useClass: ProductMysqlBDRepository,
});

export default container;
