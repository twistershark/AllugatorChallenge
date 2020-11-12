import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';
import ListCollaboratorsByUFService from './ListCollaboratorsByUFService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let listCollaboratorsByUFService: ListCollaboratorsByUFService;

describe('ListCollaboratorsByUF', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    listCollaboratorsByUFService = new ListCollaboratorsByUFService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to list collaborators by UF and show their amount', async () => {
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

    const collaborators = await listCollaboratorsByUFService.execute({
      uf: 'GO',
    });

    expect(collaborators).toEqual({
      arrayCollaborators: [collaborator1, collaborator2],
      amount: 2,
    });
  });

  it('should not list any collaborator using a wrong UF and their amount', async () => {
    await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'INACTIVE',
    });

    const collaborators = await listCollaboratorsByUFService.execute({
      uf: 'DF',
    });

    expect(collaborators).toEqual({
      arrayCollaborators: [],
      amount: 0,
    });
  });
});
