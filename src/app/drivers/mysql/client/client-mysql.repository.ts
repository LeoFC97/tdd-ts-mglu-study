import { getConnectionManager, ConnectionManager } from 'typeorm';
import EnitityNotFound from '../../../errors/enitityNotFound';
import ClientRepository from '../../../interfaces/entities/client/client-repository';
import Client from '../../../interfaces/entities/client/client';
import ClientEntity from './client-entity';
import DuplicatedKeyError from '../../../errors/duplicatedKey';

class ClientMySqlDBRepository implements ClientRepository {
  private connectionManager: ConnectionManager;
  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async getClientById(id: unknown): Promise<Client> {
    const connection = this.connectionManager.get();
    const client = await connection
      .createQueryBuilder()
      .select('*')
      .from(ClientEntity, 'client')
      .where('client.code = :id', { id })
      .execute();
    return client[0];
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
        throw new DuplicatedKeyError(`Code ${clientToBeAdded.code} duplicated`, 409);
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
  async updateClientById(clientToBeModified: Client, clientId: number): Promise<number> {
    const connection = this.connectionManager.get();
    const clientToBeUpdated = await connection
      .createQueryBuilder()
      .update(ClientEntity)
      .set({
        name: clientToBeModified.name,
        cpf: clientToBeModified.cpf,
        sexo: clientToBeModified.sexo,
        email: clientToBeModified.email,
      })
      .where('client.code = :code', { code: clientId })
      .execute();
    if (clientToBeUpdated.affected === 0) {
      throw new EnitityNotFound(`Code ${clientId} didnt found`, 404);
    }
    return clientId;
  }
  async deleteClientById(clientIdToBeDeleated: unknown): Promise<boolean> {
    const connection = this.connectionManager.get();
    const clientToBeRemoved = await connection
      .createQueryBuilder()
      .delete()
      .from(ClientEntity)
      .where('code = :code', { code: clientIdToBeDeleated })
      .execute();
    if (clientToBeRemoved.affected === 0) {
      throw new EnitityNotFound(`Code ${clientIdToBeDeleated} didnt found`, 404);
    }
    return true;
  }
}

export default ClientMySqlDBRepository;
