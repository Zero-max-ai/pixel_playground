import { Hono } from 'hono';

const health = new Hono();

health.get('/ping', async (c) => {
  return c.json({ message: "pong" });
});

export default health;
