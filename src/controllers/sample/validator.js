import { body } from 'express-validator';

export default {
  sampleValidator: [
    body('fullName', 'نام الزامی است')
      .notEmpty()
      .isString()
      .withMessage('نام باید از نوع رشته باشد')
      .not()
      .isLength({ min: 3, max: 30 })
      .withMessage('طول نام باید بین ۳ کاراکتر تا ۳۰ کاراکتر باشد'),
  ],

  createUserValidator: [body('username', 'نام کاربری صحیح نیست').notEmpty().isString().isLength({ min: 8, max: 30 })],
};
