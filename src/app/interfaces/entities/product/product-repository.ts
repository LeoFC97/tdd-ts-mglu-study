import Product from './product';

export default interface ClientRepository {
  // getAllProducts(): Promise<Client[]>;
  getProductById(id: number): Promise<Product>;
  // createProduct(): Promise<Client>;
  // updateProductById(id: number): Promise<Client>;
  // removeProductById(id: number): Promise<Client>;
}
