import { Router } from 'express';
const router = Router();
import controller from './controller.js';
import validators from './validator.js';
import validationError from '../../middleware/validationError.js';
import { checkJwt } from '../../middleware/userAuth.js';


router.post('/', validators.createUserValidator, validationError, controller.register);
router.get('/user/profile', checkJwt, controller.getProfile);

export default router;
