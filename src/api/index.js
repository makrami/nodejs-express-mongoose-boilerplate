import { Router } from 'express';
const router = Router();

import sampleService from './sample/routes.js';
router.use('/sample', sampleService);

export default router;
