import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../../../../../shared/infra/http/swagger.json';

import CollaboratorsController from '../controllers/CollaboratorsController';
import ShowCollaboratorByCPFController from '../controllers/ShowCollaboratorByCPFController';
import ListCollaboratorsController from '../controllers/ListCollaboratorsController';

const collaboratorsRouter = Router();

const swaggerDocs = swaggerJsDoc(swaggerDocument);

const collaboratorsController = new CollaboratorsController();
const showCollaboratorByCPFController = new ShowCollaboratorByCPFController();
const listCollaboratorsController = new ListCollaboratorsController();

// Routes

// Create, Read, Update and Delete Collaborator

collaboratorsRouter.use('/api-docs', swaggerUi.serve);
collaboratorsRouter.get('/api-docs', swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /collaborators:
 *  get:
 *    description: Get all collaborators
 *    responses:
 *      200:
 *        description: Success
 */
collaboratorsRouter.get('/', collaboratorsController.index);

/**
 * @swagger
 * /collaborators:
 *  post:
 *    description: Create a new collaborator
 *    parameters:
 *      - in: body
 *        name: name
 *        required: true
 *        type: string
 *        description: Nome do funcionário
 *        example: Paulo Victor
 *
 *      - in: body
 *        name: cpf
 *        required: true
 *        type: string
 *        description: CPF do funcionário
 *        example: 11122233345
 *
 *      - in: body
 *        name: job
 *        required: true
 *        type: string
 *        description: Cargo do funcionário
 *        example: PO Sr
 *
 *      - in: body
 *        name: signUpDate
 *        required: true
 *        type: string
 *        description: Data de cadastro do funcionário
 *        example: 17/02/1980
 *
 *      - in: body
 *        name: uf
 *        required: true
 *        type: string
 *        description: UF do funcionário
 *        example: GO
 *
 *      - in: body
 *        name: salary
 *        required: true
 *        type: number
 *        description: Salário do funcionário
 *        example: 150
 *
 *      - in: body
 *        name: status
 *        required: true
 *        type: string
 *        description: Status do funcionário
 *        example: ATIVO
 *    responses:
 *      201:
 *        description: Success
 */
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

/**
 * @swagger
 * /collaborators/{cpf}:
 *  delete:
 *    description: Delete a collaborator
 *    parameters:
 *      - in: path
 *        name: cpf
 *        required: true
 *        type: string
 *        description: CPF do funcionário
 *        example: 11122233345
 *    responses:
 *      200:
 *        description: Success
 */
collaboratorsRouter.delete(
  '/:cpf',
  celebrate({
    [Segments.PARAMS]: {
      cpf: Joi.string().required(),
    },
  }),
  collaboratorsController.delete,
);

/**
 * @swagger
 * /collaborators/list:
 *  get:
 *    description: List collaborators filtered by query parameters. ATTENTION! Only use one query at a time
 *    parameters:
 *      - in: query
 *        name: name
 *        description: Procurar por nome (Apague os outros querys antes de utilizar esse)
 *        style: form
 *        explode: true
 *        schema:
 *          type: object
 *          properties:
 *                name:
 *                  type: string
 *                  example: Aaron
 *                required: [name]
 *                additionalProperties: false
 *      - in: query
 *        name: job
 *        description: Procurar por cargo (Apague os outros querys antes de utilizar esse)
 *        style: form
 *        explode: true
 *        schema:
 *          type: object
 *          properties:
 *                job:
 *                  type: string
 *                  example: PO Jr
 *                required: [job]
 *                additionalProperties: false
 *      - in: query
 *        name: signUpDate
 *        description: Procurar por data de cadastro (Apague os outros querys antes de utilizar esse)
 *        style: form
 *        explode: true
 *        schema:
 *          type: object
 *          properties:
 *                signUpDate:
 *                  type: string
 *                  example: 17/02/1980
 *                required: [signUpDate]
 *                additionalProperties: false
 *
 *      - in: query
 *        name: status
 *        description: Procurar por status (Apague os outros querys antes de utilizar esse)
 *        style: form
 *        explode: true
 *        schema:
 *          type: object
 *          properties:
 *                status:
 *                  type: string
 *                  example: ATIVO
 *                required: [status]
 *                additionalProperties: false
 *
 *      - in: query
 *        name: uf
 *        description: Procurar por data de cadastro (Apague os outros querys antes de utilizar esse)
 *        style: form
 *        explode: true
 *        schema:
 *          type: object
 *          properties:
 *                uf:
 *                  type: string
 *                  example: MG
 *                required: [uf]
 *                additionalProperties: false
 *
 *      - in: query
 *        name: salary
 *        description: Procurar por data de cadastro (Apague os outros querys antes de utilizar esse)
 *        style: form
 *        explode: true
 *        schema:
 *          type: object
 *          properties:
 *                min:
 *                  type: number
 *                  example: 150
 *                max:
 *                  type: number
 *                  example: 500
 *                required: [min, max]
 *                additionalProperties: false
 *    responses:
 *      201:
 *        description: Success
 */

collaboratorsRouter.get('/list', listCollaboratorsController.index);

/**
 * @swagger
 * /collaborators/{cpf}:
 *  get:
 *    description: Find a collaborator by CPF
 *    parameters:
 *      - in: path
 *        name: cpf
 *        required: true
 *        type: string
 *        description: CPF do funcionário
 *        example: 11122233345
 *    responses:
 *      200:
 *        description: Success
 */

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
