import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListCollaboratorsBySignUpDateService from '@modules/collaborators/services/ListCollaboratorsBySignUpDateService';

export default class ListCollaboratorsBySignUpDateController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { signUpDate } = request.params;

    const listCollaboratorsBySignUpDateService = container.resolve(
      ListCollaboratorsBySignUpDateService,
    );

    const collaborators = await listCollaboratorsBySignUpDateService.execute({
      signUpDate,
    });

    return response.json(collaborators);
  }
}
