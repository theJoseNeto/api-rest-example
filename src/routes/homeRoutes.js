import {Router} from 'express';
import HomeController from '../controllers/HomeController';
const routes = Router();

const home = HomeController.index;
routes.get('/', home);

export default routes;
