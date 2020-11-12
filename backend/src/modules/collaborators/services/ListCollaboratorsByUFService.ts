import { inject, injectable } from 'tsyringe';

import IResponseFindByUFDTO from '@modules/collaborators/infra/dtos/IResponseFindByUFDTO';
import ICollaboratorsRepository from '../repositories/ICollaboratorsRepository';

interface IRequest {
  uf: string;
}

@injectable()
class ListCollaboratorsByUFService {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  public async execute({
    uf,
  }: IRequest): Promise<IResponseFindByUFDTO | undefined> {
    const foundCollaboratorsByUF = await this.collaboratorsRepository.findByUF(
      uf,
    );

    return foundCollaboratorsByUF;
  }
}

export default ListCollaboratorsByUFService;
