import express from 'express';
import router from '../../api/http/router';

const startExpressServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/', router);

  return app;
};

export default startExpressServer;
