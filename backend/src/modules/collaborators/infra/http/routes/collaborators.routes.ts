import { Router } from 'express';

import CollaboratorsController from '../controllers/CollaboratorsController';
import ShowCollaboratorByCPFController from '../controllers/ShowCollaboratorByCPFController';
import ListCollaboratorsController from '../controllers/ListCollaboratorsController';

const collaboratorsRouter = Router();

const collaboratorsController = new CollaboratorsController();
const showCollaboratorByCPFController = new ShowCollaboratorByCPFController();
const listCollaboratorsController = new ListCollaboratorsController();

// Routes

// Create, Read and Delete Collaborator
collaboratorsRouter.post('/', collaboratorsController.create);
collaboratorsRouter.get('/', collaboratorsController.index);
collaboratorsRouter.delete('/:cpf', collaboratorsController.delete);

// List collaborators by query params
collaboratorsRouter.get('/list', listCollaboratorsController.index);

// Show collaborator using CPF
collaboratorsRouter.get('/:cpf', showCollaboratorByCPFController.index);

export default collaboratorsRouter;
