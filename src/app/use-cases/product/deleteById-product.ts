import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import ProductRepository from '../../interfaces/entities/product/product-repository';

@injectable()
class DeleteProcutUseCase implements UseCase {
  constructor(
    @inject('ProductRepository') private productRepository: ProductRepository,
  ) {}

  async execute(input: any): Promise<boolean> {
    const productWasSucessfulRemoved = await this.productRepository.deleteProductById(input);
    return productWasSucessfulRemoved;
  }
}

export default DeleteProcutUseCase;
