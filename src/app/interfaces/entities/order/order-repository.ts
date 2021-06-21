import Order from './order';

export default interface OrderRepository {
  // getAllOrders(): Promise<Client[]>;
  // getOrderById(id: number): Promise<Order>;
  createOrder(productToBeAdded: Order): Promise<boolean>;
  // updateOrderById(id: number): Promise<Client>;
  // removeOrderById(id: number): Promise<Client>;
  // removeOrderById(id: number): Promise<Client>;
}
