import { FastifyInstance } from 'fastify';

export const chatRoute = async (app: FastifyInstance) => {
  app.post('/', async (request, reply) => {
    const { message } = request.body as { message: string };
    // Here, integrate with AI API like OpenAI, etc.
    const response = { reply: `AI says: ${message}` };
    return response;
  });
};
