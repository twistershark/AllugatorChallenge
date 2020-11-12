import { Router } from 'express';

import CollaboratorsController from '../controllers/CollaboratorsController';
import ListCollaboratorsByJobController from '../controllers/ListCollaboratorsByJobController';
import ListCollaboratorsByNameController from '../controllers/ListCollaboratorsByNameController';
import ListCollaboratorsBySalaryController from '../controllers/ListCollaboratorsBySalaryController';
import ListCollaboratorsBySignUpDateController from '../controllers/ListCollaboratorsBySignUpDateController';
import ListCollaboratorsByStatusController from '../controllers/ListCollaboratorsByStatusController';
import ListCollaboratorsByUFController from '../controllers/ListCollaboratorsByUFController';
import ShowCollaboratorByCPFController from '../controllers/ShowCollaboratorByCPFController';

const collaboratorsRouter = Router();

const collaboratorsController = new CollaboratorsController();
const listCollaboratorsByJobController = new ListCollaboratorsByJobController();
const listCollaboratorsByNameController = new ListCollaboratorsByNameController();
const listCollaboratorsBySalaryController = new ListCollaboratorsBySalaryController();
const listCollaboratorsBySignUpDateController = new ListCollaboratorsBySignUpDateController();
const listCollaboratorsByStatusController = new ListCollaboratorsByStatusController();
const listCollaboratorsByUFController = new ListCollaboratorsByUFController();
const showCollaboratorByCPFController = new ShowCollaboratorByCPFController();

// Routes

// Create, Read and Delete Collaborator
collaboratorsRouter.post('/', collaboratorsController.create);
collaboratorsRouter.get('/', collaboratorsController.index);
collaboratorsRouter.delete('/:cpf', collaboratorsController.delete);

// Show collaborator using CPF
collaboratorsRouter.get('/:cpf', showCollaboratorByCPFController.index);

// List collaborators by job
collaboratorsRouter.post('/list/job', listCollaboratorsByJobController.index);

// List collaborators by name
collaboratorsRouter.post('/list/name', listCollaboratorsByNameController.index);

// List collaborators by salary
collaboratorsRouter.post(
  '/list/salary',
  listCollaboratorsBySalaryController.index,
);

// List collaborators by signUp Date
collaboratorsRouter.post(
  '/list/signupdate',
  listCollaboratorsBySignUpDateController.index,
);

// List collaborators by status
collaboratorsRouter.post(
  '/list/status',
  listCollaboratorsByStatusController.index,
);

// List collaborators by UF and how many where found
collaboratorsRouter.post('/list/uf', listCollaboratorsByUFController.index);

export default collaboratorsRouter;
