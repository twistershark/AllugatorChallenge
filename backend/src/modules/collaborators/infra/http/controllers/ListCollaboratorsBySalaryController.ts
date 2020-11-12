import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListCollaboratorsBySalaryService from '@modules/collaborators/services/ListCollaboratorsBySalaryService';

export default class ListCollaboratorsBySalaryController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { min, max } = request.params;

    const listCollaboratorsBySalaryService = container.resolve(
      ListCollaboratorsBySalaryService,
    );

    const collaborators = await listCollaboratorsBySalaryService.execute({
      min: Number(min),
      max: Number(max),
    });

    return response.json(collaborators);
  }
}
