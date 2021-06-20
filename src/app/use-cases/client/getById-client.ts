import { inject, injectable } from 'tsyringe';
import Client from 'app/interfaces/entities/client/client';
import UseCase from '../../interfaces/use-case';
import ClientRepository from '../../interfaces/entities/client/client-repository';

@injectable()
class GetByIdClientUseCase implements UseCase {
  constructor(
    @inject('ClientRepository') private clientRepository: ClientRepository,
  ) {}

  async execute(id:unknown): Promise<Client> {
    const client: Client = await this.clientRepository.getClientById(id);
    return client;
  }
}

export default GetByIdClientUseCase;
