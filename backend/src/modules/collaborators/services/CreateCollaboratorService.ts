import { inject, injectable } from 'tsyringe';
// import AppError from '@shared/errors/AppError';

import Collaborator from '../infra/typeorm/entities/Collaborator';
import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';

interface IRequest {
  name: string;
  cpf: string;
  job: string;
  signUpDate: Date;
  UF: string;
  salary: number;
  status: string;
}

@injectable()
class CreateCollaboratorService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute(data: IRequest): Promise<Collaborator> {
    // Do something
  }
}

export default CreateCollaboratorService;
