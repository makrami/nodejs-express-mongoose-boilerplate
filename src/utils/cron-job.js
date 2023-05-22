import httpException from './http-exception.js';
import cron from 'node-cron';

const task = cron.schedule('*/1 * * * *', async () => {
  try {
  } catch (error) {
    httpException({ res: null, error });
  }
});

task.start();
