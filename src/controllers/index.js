import { Router } from 'express';
const router = Router();

import authRouter from './sample/routes.js';
router.use('/auth', authRouter);

export default router;
