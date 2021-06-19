import Client from './client';

export default interface ClientRepository {
  // getAllClients(): Promise<Client[]>;
  getClientById(id: number): Promise<Client>;
  // createClient(): Promise<Client>;
  // updateClientById(id: number): Promise<Client>;
  // removeClientById(id: number): Promise<Client>;
}
