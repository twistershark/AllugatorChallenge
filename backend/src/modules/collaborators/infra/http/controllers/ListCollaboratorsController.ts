import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListCollaboratorsByJobService from '@modules/collaborators/services/ListCollaboratorsByJobService';
import ListCollaboratorsByNameService from '@modules/collaborators/services/ListCollaboratorsByNameService';
import ListCollaboratorsBySalaryService from '@modules/collaborators/services/ListCollaboratorsBySalaryService';
import ListCollaboratorsBySignUpDateService from '@modules/collaborators/services/ListCollaboratorsBySignUpDateService';
import ListCollaboratorsByStatusService from '@modules/collaborators/services/ListCollaboratorsByStatusService';
import ListCollaboratorsByUFService from '@modules/collaborators/services/ListCollaboratorsByUFService';

interface IRequest {
  job?: string;
  name?: string;
  min?: number;
  max?: number;
  signUpDate?: string;
  status?: string;
  uf?: string;
}

export default class ListCollaboratorsByJobController {
  public async index(request: Request, response: Response): Promise<Response> {
    const {
      job,
      name,
      min,
      max,
      signUpDate,
      status,
      uf,
    }: IRequest = request.query;

    let collaborators;

    if (job !== undefined) {
      const listCollaboratorsByJobService = container.resolve(
        ListCollaboratorsByJobService,
      );

      collaborators = await listCollaboratorsByJobService.execute({
        job,
      });
    }

    if (name !== undefined) {
      const listCollaboratorsByNameService = container.resolve(
        ListCollaboratorsByNameService,
      );

      collaborators = await listCollaboratorsByNameService.execute({
        name,
      });
    }

    if (min !== undefined && max !== undefined) {
      const listCollaboratorsBySalaryService = container.resolve(
        ListCollaboratorsBySalaryService,
      );

      collaborators = await listCollaboratorsBySalaryService.execute({
        min,
        max,
      });
    }

    if (signUpDate !== undefined) {
      const listCollaboratorsBySignUpDateService = container.resolve(
        ListCollaboratorsBySignUpDateService,
      );

      collaborators = await listCollaboratorsBySignUpDateService.execute({
        signUpDate,
      });
    }

    if (status !== undefined) {
      const listCollaboratorsByStatusService = container.resolve(
        ListCollaboratorsByStatusService,
      );

      collaborators = await listCollaboratorsByStatusService.execute({
        status,
      });
    }

    if (uf !== undefined) {
      const listCollaboratorsByUFService = container.resolve(
        ListCollaboratorsByUFService,
      );

      collaborators = await listCollaboratorsByUFService.execute({
        uf,
      });
    }

    return response.json(collaborators);
  }
}
