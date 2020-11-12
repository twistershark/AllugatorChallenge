import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListCollaboratorsByJobService from '@modules/collaborators/services/ListCollaboratorsByJobService';

export default class ListCollaboratorsByJobController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { job } = request.params;

    const listCollaboratorsByJobService = container.resolve(
      ListCollaboratorsByJobService,
    );

    const collaborator = await listCollaboratorsByJobService.execute({
      job,
    });

    return response.json(collaborator);
  }
}
