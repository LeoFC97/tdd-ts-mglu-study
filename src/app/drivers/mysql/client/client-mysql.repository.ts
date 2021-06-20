import { getConnectionManager, ConnectionManager, InsertResult } from 'typeorm';
import ClientRepository from '../../../interfaces/entities/client/client-repository';
import Client from '../../../interfaces/entities/client/client';
import ClientEntity from './client-entity';
import DuplicatedKeyError from '../../../errors/duplicatedKey';

class ClientMySqlDBRepository implements ClientRepository {
  private connectionManager: ConnectionManager;
  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async getClientById(id: number): Promise<Client> {
    const connection = this.connectionManager.get();
    const client = await connection
      .createQueryBuilder()
      .select('*')
      .from(ClientEntity, 'client')
      .where('client.code = :id', { id })
      .getOneOrFail();
    return client;
  }

  async createClient(clientToBeAdded: Client): Promise<boolean> {
    try {
      const connection = this.connectionManager.get();
      await connection
        .createQueryBuilder()
        .insert()
        .into(ClientEntity, ['code', 'name', 'cpf', 'sexo', 'email'])
        .values([
          {
            code: clientToBeAdded.code,
            name: clientToBeAdded.name,
            cpf: clientToBeAdded.cpf,
            sexo: clientToBeAdded.sexo,
            email: clientToBeAdded.email,
          },
        ])
        .execute();
      return true;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new DuplicatedKeyError(`Key ${clientToBeAdded.code} duplicated`);
      }
      return false;
    }
  }
  async getAllClients(): Promise<Client[]> {
    const connection = this.connectionManager.get();
    const allClients = await connection
      .createQueryBuilder()
      .select('*')
      .from(ClientEntity, 'client')
      .getRawMany();
    return allClients;
  }
}

export default ClientMySqlDBRepository;
