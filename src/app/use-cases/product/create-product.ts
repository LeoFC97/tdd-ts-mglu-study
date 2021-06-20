import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import ProductRepository from '../../interfaces/entities/product/product-repository';

@injectable()
class CreateProcutUseCase implements UseCase {
  constructor(
    @inject('ProductRepository') private productRepository: ProductRepository,
  ) {}

  async execute(input: any): Promise<boolean> {
    const productWasCreated = await this.productRepository.createProduct(input);
    return productWasCreated;
  }
}

export default CreateProcutUseCase;
