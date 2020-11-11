import FakeCollaboratorsRepository from '@modules/collaborators/repositories/fakes/FakeCollaboratorsRepository';
import CreateCollaboratorService from './CreateCollaboratorService';

describe('CreateCollaborator', () => {
  it('should be able to create a new collaborator', async () => {
    const fakeCollaboratorsRepository = new FakeCollaboratorsRepository();
    const createCollaborator = new CreateCollaboratorService(
      fakeCollaboratorsRepository,
    );

    const collaborator = await createCollaborator.execute({
      name: 'Paulo',
      cpf: '00011122234',
      job: 'Dev',
      signUpDate: new Date(),
      uf: 'GO',
      salary: 50.0,
      status: 'ACTIVE',
    });

    expect(collaborator).toHaveProperty('id');
  });
});
