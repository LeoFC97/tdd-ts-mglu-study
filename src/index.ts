import 'reflect-metadata';
import 'dotenv/config';
// import startRabbitMQ from './app/drivers/rabbitmq';
import startHttpServer from './app/drivers/http/server';
import { server } from './config/enviroment';

const app = startHttpServer();
app.listen(server.port, () => {
  console.log(`Server running on port ${server.port}`);
});
