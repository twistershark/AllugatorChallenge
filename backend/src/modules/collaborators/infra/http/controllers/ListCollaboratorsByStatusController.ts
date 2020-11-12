import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListCollaboratorsByStatusService from '@modules/collaborators/services/ListCollaboratorsByStatusService';

export default class ListCollaboratorsByStatusController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { status } = request.params;

    const listCollaboratorsByStatusService = container.resolve(
      ListCollaboratorsByStatusService,
    );

    const collaborators = await listCollaboratorsByStatusService.execute({
      status,
    });

    return response.json(collaborators);
  }
}
