import express from 'express';
import httpException from '../utils/http-exception.js';
import api from '../api/index.js';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import fileUploader from 'express-fileupload';
import appConfig from '../config/app-config.js';
const app = express();

appConfig.app.env === 'development' && app.use(morgan('dev'));
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false })); // Set security HTTP headers
app.use(express.json({ limit: '5mb' })); //Passing JSON to req.body
app.use(express.urlencoded({ extended: true, limit: '5mb' })); //Passing x-www-form-urlencoded to req.body
app.use(
  fileUploader({
    createParentPath: true,
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: '/tmp/',
    safeFileNames: true,
    uriDecodeFileNames: true,
  })
);
app.use(
  '/',
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 1000, // Limit each IP to 1000 requests per `window` (here, per 1 minutes)
  })
);
app.use('/api/v1', api);

// handle undefined Routes
app.use('*', (req, res, next) => {
  httpException({ res, message: 'Not Found', status: 404 });
  next();
});

export default app;
