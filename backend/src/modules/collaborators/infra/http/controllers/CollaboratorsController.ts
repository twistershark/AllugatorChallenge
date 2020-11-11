import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateCollaboratorService from '@modules/collaborators/services/CreateCollaboratorService';
import ShowCollaboratorByCPFService from '@modules/collaborators/services/ShowCollaboratorByCPFService';

export default class CollaboratorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createCollaborator = container.resolve(CreateCollaboratorService);

    const collaborator = await createCollaborator.execute(data);

    return response.json(collaborator);
  }

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
