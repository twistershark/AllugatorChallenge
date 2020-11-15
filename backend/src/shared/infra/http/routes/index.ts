import { Router } from 'express';

import collaboratorsRouter from '../../../../modules/collaborators/infra/http/routes/collaborators.routes';

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: 'Desafio Técnico da Allugator',
//       description: 'API RESTFul desenvolvida seguindo as instruções do desafio',
//       version: '1.0.0',
//     },
//   },
//   apis: [
//     '../../../../modules/collaborators/infra/http/routes/collaborators.routes.ts',
//   ],
//   servers: ['http://localhost:3333/collaborators'],
//   definitions: {
//     Collaborator: {
//       type: 'object',
//       properties: {
//         name: {
//           type: 'string',
//         },
//         CPF: {
//           type: 'string',
//         },
//         Job: {
//           type: 'string',
//         },
//         SignUpDate: {
//           type: 'string',
//         },
//         UF: {
//           type: 'string',
//         },
//         Salary: {
//           type: 'number',
//         },
//         Status: {
//           type: 'string',
//         },
//       },
//     },
//   },
// };

const routes = Router();

/**
 * @swagger
 * /collaborators:
 *  get:
 *    description: Get all collaborators
 *    responses:
 *      200:
 *        description: Success
 */

routes.use('/collaborators', collaboratorsRouter);

export default routes;
