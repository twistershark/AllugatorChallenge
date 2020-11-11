import { Router } from 'express';

import CollaboratorsController from '../controllers/CollaboratorsController';

const collaboratorsRouter = Router();
const collaboratorsController = new CollaboratorsController();

collaboratorsRouter.post('/', collaboratorsController.create);

export default collaboratorsRouter;
