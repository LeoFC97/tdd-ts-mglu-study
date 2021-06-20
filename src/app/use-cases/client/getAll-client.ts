import { inject, injectable } from 'tsyringe';
import Client from 'app/interfaces/entities/client/client';
import UseCase from '../../interfaces/use-case';
import ClientRepository from '../../interfaces/entities/client/client-repository';

@injectable()
class GetAllClientUseCase implements UseCase {
  constructor(
    @inject('ClientRepository') private clientRepository: ClientRepository,
  ) {}

  async execute(): Promise<Client[]> {
    const allClients: Client[] = await this.clientRepository.getAllClients();
    return allClients;
  }
}

export default GetAllClientUseCase;
