import { getConnectionManager, ConnectionManager } from 'typeorm';
import OrderRepository from '../../../interfaces/entities/order/order-repository';
import Order from '../../../interfaces/entities/order/order';
import OrderEntity from './order-entity';

class OrdertMySqlDBRepository implements OrderRepository {
  private connectionManager: ConnectionManager;
  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async getOrderById(id: number): Promise<Order> {
    const connection = this.connectionManager.get();
    const order = await connection
      .createQueryBuilder()
      .select('*')
      .from(OrderEntity, 'Order')
      .where('order.code = :id', { id })
      .getOneOrFail();
    return order;
  }
}

export default OrdertMySqlDBRepository;
