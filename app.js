import dotenv from 'dotenv/config';
import express, {urlencoded, json} from 'express';
import routes from './src/routes/homeRoutes';
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

    this.app.use('/', routes);

  }
}

export default new App().app;
