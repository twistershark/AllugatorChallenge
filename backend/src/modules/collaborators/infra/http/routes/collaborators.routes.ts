import { Router, Request, Response } from 'express';

const collaboratorsRouter = Router();

collaboratorsRouter.get('/', (request: Request, response: Response) => {
  return response.send('working');
});

export default collaboratorsRouter;
