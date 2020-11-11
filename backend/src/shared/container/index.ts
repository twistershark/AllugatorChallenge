import { container } from 'tsyringe';

import ICollaboratorsRepository from '@modules/collaborators/repositories/ICollaboratorsRepository';
import CollaboratorsRepository from '@modules/collaborators/infra/typeorm/repositories/CollaboratorsRepository';

container.registerSingleton<ICollaboratorsRepository>(
  'CollaboratorsRepository',
  CollaboratorsRepository,
);
