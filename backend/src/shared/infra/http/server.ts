import 'reflect-metadata';
import '@shared/container';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import cors from 'cors';
import AppError from '@shared/errors/AppError';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

import routes from './routes';

import '@shared/infra/typeorm';

const app = express();

const swaggerDocs = swaggerJsDoc(swaggerDocument);

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => console.log('🚀 Server started on port 3333!'));
