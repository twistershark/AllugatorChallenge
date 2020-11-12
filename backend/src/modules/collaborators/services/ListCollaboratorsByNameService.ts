import { inject, injectable } from 'tsyringe';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';
import Collaborator from '../infra/typeorm/entities/Collaborator';

interface IRequest {
  name: string;
}

@injectable()
class ListCollaboratorsByNameService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({
    name,
  }: IRequest): Promise<Collaborator[] | undefined> {
    const foundCollaboratorsByName = await this.collaboratorsRepository.findByName(
      name,
    );

    return foundCollaboratorsByName;
  }
}

export default ListCollaboratorsByNameService;
