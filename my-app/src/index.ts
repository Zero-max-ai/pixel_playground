import { Hono } from 'hono'
import health from './routes/health'

const app = new Hono()

app.route('/health', health)

export default app
