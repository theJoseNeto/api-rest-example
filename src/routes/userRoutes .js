import {Router} from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';
const routes = Router();

// const index = UserController.index;
// const show = UserController.show;
const store = UserController.store;
const update = UserController.update;
const destroy   =  UserController.delete;

routes.post('/',  store);
routes.get('/:id', loginRequired, index);
routes.put('/', loginRequired,update);
routes.delete('/', loginRequired,destroy);

export default routes;
