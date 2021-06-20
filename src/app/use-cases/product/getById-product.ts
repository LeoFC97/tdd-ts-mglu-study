import { inject, injectable } from 'tsyringe';
import Product from 'app/interfaces/entities/product/product';
import UseCase from '../../interfaces/use-case';
import ProductRepository from '../../interfaces/entities/product/product-repository';

@injectable()
class GetByIdProductUseCase implements UseCase {
  constructor(
    @inject('ProductRepository') private productRepository: ProductRepository,
  ) {}

  async execute(id:unknown): Promise<Product> {
    const product: Product = await this.productRepository.getProductById(id);
    return product;
  }
}

export default GetByIdProductUseCase;
