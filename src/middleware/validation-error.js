import { validationResult } from 'express-validator';

function validationError(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).send({
      status: 'failed',
      statusCode: 422,
      validatorError: true,
      error: errors.array({
        onlyFirstError: true,
      })[0].msg,
    });

  next();
}

export default validationError;
