import { Router } from 'express';

import collaboratorsRouter from '@modules/collaborators/infra/http/routes/collaborators.routes';

const routes = Router();

routes.use('/collaborators', collaboratorsRouter);

export default routes;
