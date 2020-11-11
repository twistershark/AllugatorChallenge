import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';
import Collaborator from '../infra/typeorm/entities/Collaborator';

interface IRequest {
  cpf: string;
}

@injectable()
class ShowCollaboratorByCPFService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({ cpf }: IRequest): Promise<Collaborator | undefined> {
    const checkCollaboratorExists = await this.collaboratorsRepository.findByCPF(
      cpf,
    );

    if (!checkCollaboratorExists) {
      throw new AppError("Collaborator doesn't exists");
    }

    return checkCollaboratorExists;
  }
}

export default ShowCollaboratorByCPFService;
