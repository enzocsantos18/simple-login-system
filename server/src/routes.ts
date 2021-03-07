import { Router } from 'express';
import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController';
import authMiddlware from './app/middlewares/authMiddleware';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);
routes.post('/auth/forgot', AuthController.forgotPassword);

routes.use(authMiddlware);

routes.delete('/users/:id', UserController.delete);
routes.patch('/users/:id', UserController.update);

export default routes;
