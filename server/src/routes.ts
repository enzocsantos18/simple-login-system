import { Router } from 'express';
import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController';
import authMiddlware from './app/middlewares/authMiddleware';

const routes = Router();

routes.post('/users', UserController.store);

routes.post('/auth', AuthController.authenticate);
routes.use(authMiddlware);
routes.get('/', (req, res) => {
  return res.json({ userId: req.userId });
});

export default routes;
