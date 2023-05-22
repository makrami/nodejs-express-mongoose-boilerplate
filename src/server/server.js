import {} from 'dotenv/config';
import appConfig from '../config/app-config.js';

/* middleware  */
import app from './app.js';

/* start the database */
import db from '../services/database/db.js';

db.connect();
db.seed();

/* start the server */
const port = appConfig.app.port;
app.listen(process.env.PORT, () => {
  console.log(`Application is running on port ${port}`);
});
