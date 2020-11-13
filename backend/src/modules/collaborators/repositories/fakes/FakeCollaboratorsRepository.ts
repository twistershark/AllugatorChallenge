import { v4 as uuid_v4 } from 'uuid';

import ICollaboratorsRepository from '@modules/collaborators/repositories/ICollaboratorsRepository';
import ICreateCollaboratorDTO from '@modules/collaborators/infra/dtos/ICreateCollaboratorDTO';
import IUpdateCollaboratorDTO from '@modules/collaborators/infra/dtos/IUpdateCollaboratorDTO';
import IResponseFindByUFDTO from '@modules/collaborators/infra/dtos/IResponseFindByUFDTO';

import Collaborator from '@modules/collaborators/infra/typeorm/entities/Collaborator';

class CollaboratorsRepository implements ICollaboratorsRepository {
  private collaborators: Collaborator[] = [];

  public async create({
    name,
    cpf,
    uf,
    job,
    salary,
    signUpDate,
    status,
  }: ICreateCollaboratorDTO): Promise<Collaborator> {
    const collaborator = new Collaborator();

    Object.assign(collaborator, {
      id: uuid_v4(),
      name,
      cpf,
      uf,
      job,
      salary,
      signUpDate,
      status,
    });

    this.collaborators.push(collaborator);

    return collaborator;
  }

  public async update(data: IUpdateCollaboratorDTO): Promise<Collaborator> {
    const oldCollaboratorIndex = this.collaborators.findIndex(
      collaborator => collaborator.cpf === data.cpf,
    );

    this.collaborators[oldCollaboratorIndex] = {
      ...data,
      created_at: this.collaborators[oldCollaboratorIndex].created_at,
      updated_at: this.collaborators[oldCollaboratorIndex].updated_at,
    };

    return this.collaborators[oldCollaboratorIndex];
  }

  public async findAllCollaborators(): Promise<Collaborator[] | undefined> {
    return this.collaborators;
  }

  public async findByName(name: string): Promise<Collaborator[] | undefined> {
    const findCollaborators = this.collaborators.filter(collaborator =>
      collaborator.name.includes(name),
    );

    return findCollaborators;
  }

  public async findByCPF(cpf: string): Promise<Collaborator | undefined> {
    const findCollaborator = this.collaborators.find(
      collaborator => collaborator.cpf === cpf,
    );

    return findCollaborator;
  }

  public async findByJob(job: string): Promise<Collaborator[] | undefined> {
    const findCollaborators = this.collaborators.filter(
      collaborator => collaborator.job === job,
    );

    return findCollaborators;
  }

  public async findBySignUpDate(
    date: string,
  ): Promise<Collaborator[] | undefined> {
    const findCollaborators = this.collaborators.filter(
      collaborator => collaborator.signUpDate === date,
    );
    return findCollaborators;
  }

  public async findByUF(uf: string): Promise<IResponseFindByUFDTO | undefined> {
    const findCollaborators = this.collaborators.filter(
      collaborator => collaborator.uf === uf,
    );

    const res = {
      arrayCollaborators: findCollaborators,
      amount: findCollaborators.length,
    };

    return res;
  }

  public async findBySalary(
    min: number,
    max: number,
  ): Promise<Collaborator[] | undefined> {
    const findCollaborators = this.collaborators.filter(
      collaborator => collaborator.salary >= min && collaborator.salary <= max,
    );

    return findCollaborators;
  }

  public async findByStatus(
    status: string,
  ): Promise<Collaborator[] | undefined> {
    const findCollaborators = this.collaborators.filter(
      collaborator => collaborator.status === status,
    );

    return findCollaborators;
  }

  public async deleteCollaborator(cpf: string): Promise<void> {
    const findCollaborator = this.collaborators.findIndex(
      collaborator => collaborator.cpf === cpf,
    );

    if (findCollaborator) {
      this.collaborators.slice(findCollaborator, 1);
    }
  }
}

export default CollaboratorsRepository;
