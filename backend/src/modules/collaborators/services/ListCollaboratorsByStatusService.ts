import { inject, injectable } from 'tsyringe';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';
import Collaborator from '../infra/typeorm/entities/Collaborator';

interface IRequest {
  status: string;
}

@injectable()
class ListCollaboratorsByStatusService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({
    status,
  }: IRequest): Promise<Collaborator[] | undefined> {
    const foundCollaboratorsByStatus = await this.collaboratorsRepository.findByStatus(
      status,
    );

    return foundCollaboratorsByStatus;
  }
}

export default ListCollaboratorsByStatusService;
