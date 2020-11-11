import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ShowCollaboratorByCPFService from '@modules/collaborators/services/ShowCollaboratorByCPFService';

export default class ShowCollaboratorByCPFController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const showCollaboratorByCPF = container.resolve(
      ShowCollaboratorByCPFService,
    );

    const collaborator = await showCollaboratorByCPF.execute({
      cpf,
    });

    return response.json(collaborator);
  }
}
