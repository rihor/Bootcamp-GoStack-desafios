import 'dotenv/config';
import express from 'express';
import { resolve } from 'path';

import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // permite uso de json nas rotas
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    // servir arquivos estáticos
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
