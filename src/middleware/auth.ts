import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export const apiKeyAuth = async (request: FastifyRequest, reply: FastifyReply) => {
  const apiKey = request.headers['authorization']?.split(' ')[1];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    reply.code(401).send({ error: 'Unauthorized' });
  }
};
