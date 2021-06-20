import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import ClientRepository from '../../interfaces/entities/client/client-repository';

@injectable()
class UpdateByIdClientUseCase implements UseCase {
  constructor(
    @inject('ClientRepository') private clientRepository: ClientRepository,
  ) {}

  async execute(input: any, params: unknown): Promise<number> {
    const idOfUpdatedClient: number = await this.clientRepository.updateClientById(input, params);
    return idOfUpdatedClient;
  }
}

export default UpdateByIdClientUseCase;
