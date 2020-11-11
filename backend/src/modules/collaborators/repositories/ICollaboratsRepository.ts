import Collaborator from '../infra/typeorm/entities/Collaborator';
import ICreateCollaboratorDTO from '../infra/dtos/ICreateCollaboratorDTO';
import IUpdateCollaboratorDTO from '../infra/dtos/IUpdateCollaboratorDTO';

export default interface ICollaboratorsRepository {
  create(data: ICreateCollaboratorDTO): Promise<Collaborator>;
  update(data: IUpdateCollaboratorDTO): Promise<Collaborator>;
  findByName(name: string): Promise<Collaborator[] | undefined>;
  findByCPF(cpf: string): Promise<Collaborator | undefined>;
  findByJob(job: string): Promise<Collaborator[] | undefined>;
  findBySignUpDate(date: string): Promise<Collaborator[] | undefined>;
  loadAllUFs(): Promise<Collaborator[] | undefined>;
  findBySalary(min: number, max: number): Promise<Collaborator[] | undefined>;
  findByStatus(status: string): Promise<Collaborator[] | undefined>;
  deleteCollaborator(cpf: string): Promise<void>;
}
