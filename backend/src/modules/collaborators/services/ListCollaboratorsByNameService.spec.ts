import AppError from '@shared/errors/AppError';

import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';
import ListCollaboratorsByNameService from './ListCollaboratorsByNameService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let listCollaboratorsByNameService: ListCollaboratorsByNameService;

describe('ListCollaboratorsByName', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    listCollaboratorsByNameService = new ListCollaboratorsByNameService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to list collaborators by name', async () => {
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

    const collaborators = await listCollaboratorsByNameService.execute({
      name: 'Paulo',
    });

    expect(collaborators).toEqual([collaborator1, collaborator2]);
  });

  it('should not find any collaborator using a unknown name', async () => {
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

    const collaborators = await listCollaboratorsByNameService.execute({
      name: 'Guilherme',
    });

    expect(collaborators).toEqual([]);
  });
});
