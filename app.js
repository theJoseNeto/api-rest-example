import dotenv from 'dotenv/config';
import express, {urlencoded, json} from 'express';
import homeRoute from './src/routes/homeRoutes';
import userRoute from './src/routes/userRoutes ';
import tokenRoute from './src/routes/tokenRoutes';

import './src/database/';

class App {

  constructor() {

    this.app = express();
    this.middlewares();
    this.routes();

  }

  middlewares() {

    this.app.use(urlencoded({extended: true}));
    this.app.use(json());

  }

  routes() {

    this.app.use('/', homeRoute);
    this.app.use('/users', userRoute );
    this.app.use('/tokens', tokenRoute);


  }
}

export default new App().app;
