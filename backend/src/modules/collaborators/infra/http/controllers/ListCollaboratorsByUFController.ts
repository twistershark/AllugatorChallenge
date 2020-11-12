import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListCollaboratorsByUFService from '@modules/collaborators/services/ListCollaboratorsByUFService';

export default class ListCollaboratorsByUFController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { uf } = request.params;

    const listCollaboratorsByUFService = container.resolve(
      ListCollaboratorsByUFService,
    );

    const collaborators = await listCollaboratorsByUFService.execute({
      uf,
    });

    return response.json(collaborators);
  }
}
