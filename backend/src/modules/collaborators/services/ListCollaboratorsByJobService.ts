import { inject, injectable } from 'tsyringe';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';
import Collaborator from '../infra/typeorm/entities/Collaborator';

interface IRequest {
  job: string;
}

@injectable()
class ListCollaboratorsByJobService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({ job }: IRequest): Promise<Collaborator[] | undefined> {
    const foundCollaboratorsByJob = await this.collaboratorsRepository.findByJob(
      job,
    );

    return foundCollaboratorsByJob;
  }
}

export default ListCollaboratorsByJobService;
