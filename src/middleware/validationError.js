import { validationResult } from 'express-validator';
import { UnprocessableEntityException } from '../utils/response-handler/httpError.js';

function validationError(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.array({ onlyFirstError: true, })[0].msg
    throw new UnprocessableEntityException(message)
  }

  next()
}

export default validationError;
