import Collaborator from '@modules/collaborators/infra/typeorm/entities/Collaborator';

export default interface ICreateCollaboratorDTO {
  amount: number;
  arrayCollaborators: Collaborator[];
}
