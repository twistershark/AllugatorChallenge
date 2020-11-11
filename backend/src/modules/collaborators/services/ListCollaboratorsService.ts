import { inject, injectable } from 'tsyringe';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';
import Collaborator from '../infra/typeorm/entities/Collaborator';

@injectable()
class ListCollaboratorsService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute(): Promise<Collaborator[] | undefined> {
    const collaborators = await this.collaboratorsRepository.findAllCollaborators();

    return collaborators;
  }
}

export default ListCollaboratorsService;
