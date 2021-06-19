import { container } from 'tsyringe';

import ClientMysqlBDRepository from './drivers/mysql/client/client-mysql.repository';

container.register('ClientRepository', {
  useClass: ClientMysqlBDRepository,
});

export default container;
