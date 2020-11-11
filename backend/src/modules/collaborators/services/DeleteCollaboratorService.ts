import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';

interface IRequest {
  cpf: string;
}

@injectable()
class DeleteCollaboratorService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({ cpf }: IRequest): Promise<void> {
    const checkCollaboratorExists = await this.collaboratorsRepository.findByCPF(
      cpf,
    );

    if (!checkCollaboratorExists) {
      throw new AppError("Collaborator doesn't exists");
    }

    await this.collaboratorsRepository.deleteCollaborator(cpf);
  }
}

export default DeleteCollaboratorService;
