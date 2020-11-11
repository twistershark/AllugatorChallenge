import { Router } from 'express';

import collaboratorsRouter from '../../../../modules/collaborators/infra/http/routes/collaboratos.routes';

const routes = Router();

routes.use('/collaborators', collaboratorsRouter);

export default routes;
