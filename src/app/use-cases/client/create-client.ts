import { inject, injectable } from 'tsyringe';
import UseCase from '../../interfaces/use-case';
import ClientRepository from '../../interfaces/entities/client/client-repository';

@injectable()
class CreateClientUseCase implements UseCase {
  constructor(
    @inject('ClientRepository') private clientRepository: ClientRepository,
  ) {}

  async execute(input: any): Promise<boolean> {
    const userWasCreated = await this.clientRepository.createClient(input);
    return userWasCreated;
  }
}

export default CreateClientUseCase;
