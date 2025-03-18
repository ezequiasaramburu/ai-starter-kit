import fastify from 'fastify';
import dotenv from 'dotenv';
import { setupRoutes } from './api/routes';
import { setupMiddleware } from './middleware';

dotenv.config();

const app = fastify();

setupMiddleware(app);
setupRoutes(app);

app.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});
