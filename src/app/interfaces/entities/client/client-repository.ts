import Client from './client';

export default interface ClientRepository {
  // getAllClients(): Promise<Client[]>;
  getById(id: number): Promise<Client>;
  // create(): Promise<Client>;
  // updateById(id: number): Promise<Client>;
  // removeById(id: number): Promise<Client>;
}
