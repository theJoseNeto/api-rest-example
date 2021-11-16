import {Router} from 'express';
import TokenController from '../controllers/TokenController';
const routes = Router();

const token = TokenController.store;

routes.post('/', token);

export default routes;
