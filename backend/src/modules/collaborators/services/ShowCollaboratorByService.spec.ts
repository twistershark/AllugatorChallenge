import AppError from '@shared/errors/AppError';

import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';
import ShowCollaboratorByCPFService from './ShowCollaboratorByCPFService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let showCollaboratorByCPFService: ShowCollaboratorByCPFService;

describe('ShowCollaboratorByCPF', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    showCollaboratorByCPFService = new ShowCollaboratorByCPFService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to find a collaborator by CPF', async () => {
    await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    const collaborator = await showCollaboratorByCPFService.execute({
      cpf: '00011122234',
    });

    expect(collaborator).toHaveProperty('id');
  });

  it('should not be able to find a non existent collaborator by CPF', async () => {
    await expect(
      showCollaboratorByCPFService.execute({
        cpf: '00011122234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
