import AppError from '@shared/errors/AppError';

import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';

import CreateCollaboratorService from './CreateCollaboratorService';
import DeleteCollaboratorService from './DeleteCollaboratorService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;
let deleteCollaboratorService: DeleteCollaboratorService;

describe('DeleteCollaborator', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
    deleteCollaboratorService = new DeleteCollaboratorService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to delete a collaborator using CPF', async () => {
    const collaborator = await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    expect(
      await deleteCollaboratorService.execute({ cpf: collaborator.cpf }),
    ).toBe(undefined);
  });

  it('should not be able to delete a collaborator using the wrong CPF', async () => {
    await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    await expect(
      deleteCollaboratorService.execute({ cpf: '00000000000' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
