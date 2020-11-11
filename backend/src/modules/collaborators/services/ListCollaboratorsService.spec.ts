import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';

import CreateCollaboratorService from './CreateCollaboratorService';
import ListCollaboratorsService from './ListCollaboratorsService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let listCollaboratorsService: ListCollaboratorsService;

describe('ShowCollaboratorByCPF', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    listCollaboratorsService = new ListCollaboratorsService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to list the collaborators', async () => {
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
      name: 'Paulo2',
      cpf: '00011122235',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    const collaborators = await listCollaboratorsService.execute();

    expect(collaborators).toEqual([collaborator1, collaborator2]);
  });
});
