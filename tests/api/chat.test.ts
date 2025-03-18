import request from 'supertest';
import app from '../../src/index';

describe('POST /api/chat', () => {
  it('should respond with AI reply', async () => {
    const res = await request(app.server)
      .post('/api/chat')
      .send({ message: 'Hello, AI!' });
    expect(res.status).toBe(200);
    expect(res.body.reply).toBe('AI says: Hello, AI!');
  });
});
