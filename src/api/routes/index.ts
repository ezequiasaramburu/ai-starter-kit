import { FastifyInstance } from 'fastify';
import { chatRoute } from './chat';
import { completionsRoute } from './completions';
import { usageRoute } from './usage';

export const setupRoutes = (app: FastifyInstance) => {
  app.register(chatRoute, { prefix: '/api/chat' });
  app.register(completionsRoute, { prefix: '/api/completions' });
  app.register(usageRoute, { prefix: '/api/usage' });
};
