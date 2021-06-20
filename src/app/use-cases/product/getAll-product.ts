import { inject, injectable } from 'tsyringe';
import Product from 'app/interfaces/entities/product/product';
import UseCase from '../../interfaces/use-case';
import ProductRepository from '../../interfaces/entities/product/product-repository';

@injectable()
class GetAllProductUseCase implements UseCase {
  constructor(
    @inject('ProductRepository') private clientRepository: ProductRepository,
  ) {}

  async execute(): Promise<Product[]> {
    const allProducts: Product[] = await this.clientRepository.getAllProducts();
    return allProducts;
  }
}

export default GetAllProductUseCase;
