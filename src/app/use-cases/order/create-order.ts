import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import OrderRepository from '../../interfaces/entities/order/order-repository';

@injectable()
class CreateOrderUseCase implements UseCase {
  constructor(
    @inject('OrderRepository') private orderRepository: OrderRepository,
  ) {}

  async execute(input: any): Promise<boolean> {
    const orderWasCreated = await this.orderRepository.createOrder(input);
    return orderWasCreated;
  }
}

export default CreateOrderUseCase;
