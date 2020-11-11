import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateCollaboratorService from '@modules/collaborators/services/CreateCollaboratorService';
import ListCollaboratorsService from '@modules/collaborators/services/ListCollaboratorsService';

export default class CollaboratorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createCollaborator = container.resolve(CreateCollaboratorService);

    const collaborator = await createCollaborator.execute(data);

    return response.json(collaborator);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listCollaboratorsService = container.resolve(
      ListCollaboratorsService,
    );

    const collaborators = await listCollaboratorsService.execute();

    return response.json(collaborators);
  }
}
