import { inject, injectable } from 'tsyringe';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';
import Collaborator from '../infra/typeorm/entities/Collaborator';

interface IRequest {
  signUpDate: string;
}

@injectable()
class ListCollaboratorsBySignUpDateService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({
    signUpDate,
  }: IRequest): Promise<Collaborator[] | undefined> {
    const foundCollaboratorsBySignUpDate = await this.collaboratorsRepository.findBySignUpDate(
      signUpDate,
    );

    return foundCollaboratorsBySignUpDate;
  }
}

export default ListCollaboratorsBySignUpDateService;
