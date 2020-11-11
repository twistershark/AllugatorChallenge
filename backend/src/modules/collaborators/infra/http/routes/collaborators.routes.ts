import { Router } from 'express';

import { container } from 'tsyringe';

import CreateCollaboratorService from '@modules/collaborators/services/CreateCollaboratorService';

const collaboratorsRouter = Router();

collaboratorsRouter.post('/', async (request, response) => {
  const data = request.body;

  const createCollaborator = container.resolve(CreateCollaboratorService);

  const collaborator = await createCollaborator.execute(data);

  return response.json(collaborator);
});

export default collaboratorsRouter;
