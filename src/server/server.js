import { } from 'dotenv/config';
import { config } from '../config/config.js';
import app from './app.js';
import db from '../services/database/db.js';
const port = config.port;

db.connect();
app.listen(port, () => {
  console.log(`Application is running on port ${ port }`);
});