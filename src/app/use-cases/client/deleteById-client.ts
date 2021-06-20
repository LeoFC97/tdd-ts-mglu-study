import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import ClientRepository from '../../interfaces/entities/client/client-repository';

@injectable()
class DeletetByIdClientUseCase implements UseCase {
  constructor(
    @inject('ClientRepository') private clientRepository: ClientRepository,
  ) {}

  async execute(id:unknown): Promise<boolean> {
    const clientWasSucessfulRemoved: boolean = await this.clientRepository.deleteClientById(id);
    return clientWasSucessfulRemoved;
  }
}

export default DeletetByIdClientUseCase;
