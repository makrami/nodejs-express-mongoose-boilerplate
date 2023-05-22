import {} from 'dotenv/config';
import { config } from '../config/config.js';
import app from './app.js';
import db from '../services/database/db.js';

function bootstrap() {
  const port = config.port;

  db.connect();
  db.seed();

  app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
  });

  return app;
}

bootstrap();

export default bootstrap;
