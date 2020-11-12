import { inject, injectable } from 'tsyringe';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';
import Collaborator from '../infra/typeorm/entities/Collaborator';

interface IRequest {
  min: number;
  max: number;
}

@injectable()
class ListCollaboratorsBySalaryService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({
    min,
    max,
  }: IRequest): Promise<Collaborator[] | undefined> {
    const foundCollaboratorsBetweenRangeOfSalary = await this.collaboratorsRepository.findBySalary(
      min,
      max,
    );

    return foundCollaboratorsBetweenRangeOfSalary;
  }
}

export default ListCollaboratorsBySalaryService;
