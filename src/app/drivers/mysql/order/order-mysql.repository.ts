import { getConnectionManager, ConnectionManager } from 'typeorm';
import OrderRepository from '../../../interfaces/entities/order/order-repository';
import Order from '../../../interfaces/entities/order/order';
// import OrderEntity from './order-entity';

class OrdertMySqlDBRepository implements OrderRepository {
  private connectionManager: ConnectionManager;
  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async createOrder(orderToBreCreated: Order): Promise<boolean> {
    console.log(orderToBreCreated);
    const connection = this.connectionManager.get();
    const order = await connection;
    return true;
  }
}

export default OrdertMySqlDBRepository;
