import mongoose from 'mongoose';
import appConfig from '../../config/app-config.js';

const db = {
  connect: () => {
    mongoose
      .connect(appConfig.db.database_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('DB connection Successfully!');
      })
      .catch((err) => {
        console.log(err.name, err.message);
        process.exit(1);
      });
  },

  seed: () => {},
};

export default db;
