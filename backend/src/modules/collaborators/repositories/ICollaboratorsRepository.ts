import Collaborator from '@modules/collaborators/infra/typeorm/entities/Collaborator';
import ICreateCollaboratorDTO from '@modules/collaborators/infra/dtos/ICreateCollaboratorDTO';
import IUpdateCollaboratorDTO from '@modules/collaborators/infra/dtos/IUpdateCollaboratorDTO';
import IResponseFindByUFDTO from '@modules/collaborators/infra/dtos/IResponseFindByUFDTO';

export default interface ICollaboratorsRepository {
  create(data: ICreateCollaboratorDTO): Promise<Collaborator>;
  update(data: IUpdateCollaboratorDTO): Promise<Collaborator>;
  findAllCollaborators(): Promise<Collaborator[] | undefined>;
  findByName(name: string): Promise<Collaborator[] | undefined>;
  findByCPF(cpf: string): Promise<Collaborator | undefined>;
  findByJob(job: string): Promise<Collaborator[] | undefined>;
  findBySignUpDate(date: string): Promise<Collaborator[] | undefined>;
  findByUF(uf: string): Promise<IResponseFindByUFDTO | undefined>;
  findBySalary(min: number, max: number): Promise<Collaborator[] | undefined>;
  findByStatus(status: string): Promise<Collaborator[] | undefined>;
  deleteCollaborator(cpf: string): Promise<void>;
}
