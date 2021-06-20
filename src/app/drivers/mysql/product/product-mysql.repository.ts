import { getConnectionManager, ConnectionManager } from 'typeorm';
import EnitityNotFound from '../../../errors/enitityNotFound';
import ProductRepository from '../../../interfaces/entities/product/product-repository';
import Product from '../../../interfaces/entities/product/product';
import ProductEntity from './product-entity';
import DuplicatedKeyError from '../../../errors/duplicatedKey';

class ProductMySqlDBRepository implements ProductRepository {
  private connectionManager: ConnectionManager;
  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async getProductById(id: unknown): Promise<Product> {
    const connection = this.connectionManager.get();
    const product = await connection
      .createQueryBuilder()
      .select('*')
      .from(ProductEntity, 'Product')
      .where('product.code = :id', { id })
      .execute();
    return product[0];
  }

  async createProduct(productToBeAdded: Product): Promise<boolean> {
    try {
      const connection = this.connectionManager.get();
      await connection
        .createQueryBuilder()
        .insert()
        .into(ProductEntity, ['code', 'name', 'color', 'size', 'value'])
        .values([
          {
            code: productToBeAdded.code,
            name: productToBeAdded.name,
            color: productToBeAdded.color,
            size: productToBeAdded.size,
            value: productToBeAdded.value,
          },
        ])
        .execute();
      return true;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new DuplicatedKeyError(`Code ${productToBeAdded.code} duplicated`, 409);
      }
      return false;
    }
  }
  async getAllProducts(): Promise<Product[]> {
    const connection = this.connectionManager.get();
    const allProducts = await connection
      .createQueryBuilder()
      .select('*')
      .from(ProductEntity, 'product')
      .getRawMany();
    return allProducts;
  }
  async updateProductById(productToBeModified: Product, productId: number): Promise<number> {
    const connection = this.connectionManager.get();
    const productToBeUpdated = await connection
      .createQueryBuilder()
      .update(ProductEntity)
      .set({
        name: productToBeModified.name,
        color: productToBeModified.color,
        size: productToBeModified.size,
        value: productToBeModified.value,
      })
      .where('product.code = :code', { code: productId })
      .execute();
    if (productToBeUpdated.affected === 0) {
      throw new EnitityNotFound(`Code ${productId} didnt found`, 404);
    }
    return productId;
  }
  async deleteProductById(productIdToBeDeleated: unknown): Promise<boolean> {
    const connection = this.connectionManager.get();
    const productToBeRemoved = await connection
      .createQueryBuilder()
      .delete()
      .from(ProductEntity)
      .where('code = :code', { code: productIdToBeDeleated })
      .execute();
    if (productToBeRemoved.affected === 0) {
      throw new EnitityNotFound(`Code ${productIdToBeDeleated} didnt found`, 404);
    }
    return true;
  }
}

export default ProductMySqlDBRepository;
