import { getConnectionManager, ConnectionManager } from 'typeorm';
import ProductRepository from '../../../interfaces/entities/product/product-repository';
import Product from '../../../interfaces/entities/product/product';
import ProductEntity from './product-entity';

class ProductMySqlDBRepository implements ProductRepository {
  private connectionManager: ConnectionManager;
  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async getProductById(id: number): Promise<Product> {
    const connection = this.connectionManager.get();
    const product = await connection
      .createQueryBuilder()
      .select('*')
      .from(ProductEntity, 'Product')
      .where('product.code = :id', { id })
      .getOneOrFail();
    return product;
  }
}

export default ProductMySqlDBRepository;
