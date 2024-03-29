import { inject, injectable } from 'tsyringe';

import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';
import Collaborator from '../infra/typeorm/entities/Collaborator';

interface IRequest {
  name: string;
  cpf: string;
  job: string;
  signUpDate: string;
  uf: string;
  salary: number;
  status: string;
}

@injectable()
class CreateCollaboratorService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({
    name,
    cpf,
    job,
    signUpDate,
    uf,
    salary,
    status,
  }: IRequest): Promise<Collaborator> {
    const checkUserExists = await this.collaboratorsRepository.findByCPF(cpf);

    if (checkUserExists) {
      const updatedCollaborator = await this.collaboratorsRepository.update({
        id: checkUserExists.id,
        name,
        cpf,
        job,
        signUpDate,
        uf,
        salary,
        status,
      });

      return updatedCollaborator;
    }

    const collaborator = await this.collaboratorsRepository.create({
      name,
      cpf,
      job,
      signUpDate,
      uf,
      salary,
      status,
    });

    return collaborator;
  }
}

export default CreateCollaboratorService;
