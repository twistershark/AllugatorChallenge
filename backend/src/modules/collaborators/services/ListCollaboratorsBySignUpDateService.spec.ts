import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';
import ListCollaboratorsBySignUpDateService from './ListCollaboratorsBySignUpDateService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let listCollaboratorsBySignUpDateService: ListCollaboratorsBySignUpDateService;

describe('ListCollaboratorsBySignUpDate', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    listCollaboratorsBySignUpDateService = new ListCollaboratorsBySignUpDateService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to list collaborators by signup date', async () => {
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

    const collaborators = await listCollaboratorsBySignUpDateService.execute({
      signUpDate: '17/02/1996',
    });

    expect(collaborators).toEqual([collaborator1, collaborator2]);
  });

  it('should not list any collaborator with wrong signup date', async () => {
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

    const collaborators = await listCollaboratorsBySignUpDateService.execute({
      signUpDate: '20/02/1996',
    });

    expect(collaborators).toEqual([]);
  });
});
