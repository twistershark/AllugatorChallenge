import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';
import ListCollaboratorsByJobService from './ListCollaboratorsByJobService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let listCollaboratorsByJobService: ListCollaboratorsByJobService;

describe('ListCollaboratorsByJob', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    listCollaboratorsByJobService = new ListCollaboratorsByJobService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to list collaborators by job', async () => {
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

    const collaborators = await listCollaboratorsByJobService.execute({
      job: 'Dev',
    });

    expect(collaborators).toEqual([collaborator1, collaborator2]);
  });

  it('should not find any collaborator using a unknown job', async () => {
    await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    await createCollaborator.execute({
      name: 'Paulo Victor',
      cpf: '00011122236',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    const collaborators = await listCollaboratorsByJobService.execute({
      job: 'Driver',
    });

    expect(collaborators).toEqual([]);
  });
});
