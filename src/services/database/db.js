import mongoose from 'mongoose';
import { config } from '../../config/config.js';
const databaseUrl = config.databaseUrl;

const db = {
  connect: () => {
    mongoose
      .connect(databaseUrl, {
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
