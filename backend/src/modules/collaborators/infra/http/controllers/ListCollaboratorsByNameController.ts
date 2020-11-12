import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListCollaboratorsByNameService from '@modules/collaborators/services/ListCollaboratorsByNameService';

export default class ListCollaboratorsByNameController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const listCollaboratorsByNameService = container.resolve(
      ListCollaboratorsByNameService,
    );

    const collaborators = await listCollaboratorsByNameService.execute({
      name,
    });

    return response.json(collaborators);
  }
}
