import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CollaboratorsController from '../controllers/CollaboratorsController';
import ShowCollaboratorByCPFController from '../controllers/ShowCollaboratorByCPFController';
import ListCollaboratorsController from '../controllers/ListCollaboratorsController';

const collaboratorsRouter = Router();

const collaboratorsController = new CollaboratorsController();
const showCollaboratorByCPFController = new ShowCollaboratorByCPFController();
const listCollaboratorsController = new ListCollaboratorsController();

// Routes

// Create, Read, Update and Delete Collaborator

collaboratorsRouter.get('/', collaboratorsController.index);
collaboratorsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      cpf: Joi.string().required().length(11),
      job: Joi.string().required(),
      signUpDate: Joi.string().required().length(10),
      uf: Joi.string().required().length(2),
      salary: Joi.number().required(),
      status: Joi.string().required(),
    },
  }),
  collaboratorsController.create,
);
collaboratorsRouter.delete(
  '/:cpf',
  celebrate({
    [Segments.PARAMS]: {
      cpf: Joi.string().required().length(11),
    },
  }),
  collaboratorsController.delete,
);

// List collaborators by query params
collaboratorsRouter.get('/list', listCollaboratorsController.index);

// Show collaborator using CPF
collaboratorsRouter.get(
  '/:cpf',
  celebrate({
    [Segments.PARAMS]: {
      cpf: Joi.string().required().length(11),
    },
  }),
  showCollaboratorByCPFController.index,
);

export default collaboratorsRouter;
