import { getConnectionManager, ConnectionManager } from 'typeorm';
import ClientRepository from '../../../interfaces/entities/client/client-repository';
import Client from '../../../interfaces/entities/client/client';
import ClientEntity from './client-entity';

class ClientMySqlDBRepository implements ClientRepository {
  private connectionManager: ConnectionManager;
  constructor() {
    this.connectionManager = getConnectionManager();
  }

  async getClientById(id: number): Promise<Client> {
    const connection = this.connectionManager.get();
    const company = await connection
      .createQueryBuilder()
      .select('*')
      .from(ClientEntity, 'client')
      .where('client.code = :id', { id })
      .getOneOrFail();
    return company;
  }
}

export default ClientMySqlDBRepository;
