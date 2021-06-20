import { InsertResult } from 'typeorm';
import Client from './client';

export default interface ClientRepository {
  getAllClients(): Promise<Client[]>;
  getClientById(id: unknown): Promise<Client>;
  createClient(clientToBeAdded: Client): Promise<boolean>;
  // updateClientById(id: number): Promise<Client>;
  // removeClientById(id: number): Promise<Client>;
}
