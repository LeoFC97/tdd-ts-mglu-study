import Product from './product';

export default interface ProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: unknown): Promise<Product>;
  createProduct(clientToBeAdded: Product): Promise<boolean>;
  updateProductById(clientToBeModified: Product, id:unknown): Promise<number>;
  deleteProductById(clientIdToBeDeleated: unknown): Promise<boolean>;
}
