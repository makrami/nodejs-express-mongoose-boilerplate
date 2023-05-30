import User from '../../models/user.model.js';
import jwt from 'jsonwebtoken';
import { config } from '../../config/config.js';
import { BadRequestException } from '../../utils/response-handler/httpError.js';
import HttpSuccess from '../../utils/response-handler/HttpSuccess.js';

async function register(req, res, next) {
  const body = { username: req.body.username };

  try {
    let user = await User.findOne({ username: body.username });
    if (user) throw new BadRequestException('نام کاربری توسط شخص دیگری قبلا ثبت شده است')

    user = await User.create({ username: body.username });

    // create token
    const payload = { userId: user._id };
    const accessToken = jwt.sign(payload, config.userAccessTokenSecret);

    new HttpSuccess({ res, statusCode: 201, message: 'کاربر با موفقیت وارد شد', data: { user, accessToken } })
  } catch (error) {
    next(error)
  }
}

async function getProfile(req, res) {
  const { user } = req;

  try {
    new HttpSuccess({ res, statusCode: 200, data: user })
  } catch (error) {
    next(error)
  }
}

export default {
  register,
  getProfile
};
