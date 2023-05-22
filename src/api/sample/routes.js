import { Router } from 'express';
const router = Router();
import controller from './controller.js';
import validators from './validator.js';
import validationError from '../../middleware/validation-error.js';
import { checkJwt } from '../../middleware/user-auth.js';

// router.get('/', controller.sampleApi);
router.post('/auth', validators.createUserValidator, validationError, controller.sampleRegister);
// router.get('/user/profile', checkJwt, controller.getProfile);
// router.get('/', validators.sampleValidators, validationError, controller.sampleApi);

export default router;
