/* eslint-disable new-cap */
import {Router} from 'express';
import UserController from '../controllers/UserController';
const routes = Router();

const store = UserController.store;
const index = UserController.index;
const show = UserController.show;
const update = UserController.update;
const destroy   =  UserController.delete;

routes.post('/', store);
routes.get('/', index);
routes.get('/:id', show);
routes.put('/:id', update);
routes.delete('/:id', destroy);

export default routes;
