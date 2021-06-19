import { InsertResult } from 'typeorm';
import Client from './client';

export default interface ClientRepository {
  // getAllClients(): Promise<Client[]>;
  getClientById(id: number): Promise<Client>;
  createClient(clientToBeAdded: Client): Promise<InsertResult>;
  // updateClientById(id: number): Promise<Client>;
  // removeClientById(id: number): Promise<Client>;
}
