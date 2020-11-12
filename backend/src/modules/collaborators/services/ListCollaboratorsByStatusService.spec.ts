import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';
import ListCollaboratorsByStatusService from './ListCollaboratorsByStatusService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let listCollaboratorsByStatusService: ListCollaboratorsByStatusService;

describe('ListCollaboratorsByStatus', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    listCollaboratorsByStatusService = new ListCollaboratorsByStatusService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to list collaborators by status', async () => {
    const collaborator1 = await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    const collaborator2 = await createCollaborator.execute({
      name: 'Paulo Victor',
      cpf: '00011122236',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    const collaborators = await listCollaboratorsByStatusService.execute({
      status: 'ACTIVE',
    });

    expect(collaborators).toEqual([collaborator1, collaborator2]);
  });

  it('should not list any collaborator with a wrong status', async () => {
    await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'INACTIVE',
    });

    const collaborators = await listCollaboratorsByStatusService.execute({
      status: 'ACTIVE',
    });

    expect(collaborators).toEqual([]);
  });
});
