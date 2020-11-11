import AppError from '@shared/errors/AppError';

import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';

let fakeCollaboratorsRepository: FakeCollaboratorsRepository;
let createCollaborator: CreateCollaboratorService;

describe('CreateCollaborator', () => {
  beforeEach(() => {
    fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );
  });

  it('should be able to create a new collaborator', async () => {
    const collaborator = await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: '17/02/1996',
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    expect(collaborator).toHaveProperty('id');
  });

  it('should not be able to create a new collaborator with the same CPF from another collaborator', async () => {
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
      createCollaborator.execute({
        name: 'Paulo',
        cpf: '00011122234',
        job: 'Dev',
        signUpDate: '17/02/1996',
        uf: 'GO',
        salary: 50.0,
        status: 'ACTIVE',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
