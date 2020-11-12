import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';
import ListCollaboratorsBySalaryService from './ListCollaboratorsBySalaryService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let listCollaboratorsBySalaryService: ListCollaboratorsBySalaryService;

describe('ListCollaboratorsBySalary', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    listCollaboratorsBySalaryService = new ListCollaboratorsBySalaryService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to list collaborators between range of salary', async () => {
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
      salary: 67.0,
      status: 'ACTIVE',
    });

    const collaborators = await listCollaboratorsBySalaryService.execute({
      min: 40,
      max: 80,
    });

    expect(collaborators).toEqual([collaborator1, collaborator2]);
  });

  it('should not be able to list collaborators outside range of salary', async () => {
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
      salary: 80.0,
      status: 'ACTIVE',
    });

    const collaborators = await listCollaboratorsBySalaryService.execute({
      min: 150,
      max: 250,
    });

    expect(collaborators).toEqual([]);
  });
});
