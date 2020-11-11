import { getRepository, Repository, Between } from 'typeorm';

import ICollaboratorsRepository from '@modules/collaborators/repositories/ICollaboratorsRepository';
import ICreateCollaboratorDTO from '@modules/collaborators/infra/dtos/ICreateCollaboratorDTO';
import IUpdateCollaboratorDTO from '@modules/collaborators/infra/dtos/IUpdateCollaboratorDTO';

import Collaborator from '@modules/collaborators/infra/typeorm/entities/Collaborator';

class CollaboratorsRepository implements ICollaboratorsRepository {
  private ormRepository: Repository<Collaborator>;

  constructor() {
    this.ormRepository = getRepository(Collaborator);
  }

  public async create(
    collaboratorData: ICreateCollaboratorDTO,
  ): Promise<Collaborator> {
    const collaborator = this.ormRepository.create(collaboratorData);

    await this.ormRepository.save(collaborator);

    return collaborator;
  }

  public async update(data: IUpdateCollaboratorDTO): Promise<Collaborator> {
    const collaborator = await this.ormRepository.save(data);

    return collaborator;
  }

  public async findByName(name: string): Promise<Collaborator[] | undefined> {
    const collaborators = await this.ormRepository.find({
      where: { name },
    });

    return collaborators;
  }

  public async findByCPF(cpf: string): Promise<Collaborator | undefined> {
    const collaborator = await this.ormRepository.findOne({
      where: { cpf },
    });

    return collaborator;
  }

  public async findByJob(job: string): Promise<Collaborator[] | undefined> {
    const collaborators = await this.ormRepository.find({
      where: { job },
    });

    return collaborators;
  }

  public async findBySignUpDate(
    date: string,
  ): Promise<Collaborator[] | undefined> {
    // Need to implement
    console.log(date);
    return undefined;
  }

  public async loadAllUFs(): Promise<Collaborator[] | undefined> {
    // Need to implement
    return undefined;
  }

  public async findBySalary(
    min: number,
    max: number,
  ): Promise<Collaborator[] | undefined> {
    const collaborators = await this.ormRepository.find({
      where: { salario: Between(min, max) },
    });

    return collaborators;
  }

  public async findByStatus(
    status: string,
  ): Promise<Collaborator[] | undefined> {
    const collaborators = await this.ormRepository.find({
      where: { status },
    });

    return collaborators;
  }

  public async deleteCollaborator(cpf: string): Promise<void> {
    await this.ormRepository.delete(cpf);
  }
}

export default CollaboratorsRepository;
