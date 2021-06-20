import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import ProductRepository from '../../interfaces/entities/product/product-repository';

@injectable()
class GetByIdProductUseCase implements UseCase {
  constructor(
    @inject('ProductRepository') private productRepository: ProductRepository,
  ) {}

  async execute(input: any, params: unknown): Promise<number> {
    const idOfUpdatedProduct: number = await this
      .productRepository.updateProductById(input, params);
    return idOfUpdatedProduct;
  }
}

export default GetByIdProductUseCase;
