import httpException from '../utils/http-exception.js';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import appConfig from '../config/app-config.js';

export const checkJwt = async (req, res, next) => {
  // get the user with the token
  const user_access_token_secret = appConfig.auth.user_access_token_secret;
  let tokenPrefix = req.headers.authorization.split(' ')[0];
  let token = req.headers.authorization.split(' ')[1];
  let jwtPayload;

  if (!token || !tokenPrefix) return httpException({ res, message: 'Missing api key', status: 401 });

  // try to validate the token and get data
  try {
    jwtPayload = jwt.verify(token, user_access_token_secret);

    // find user with the user id
    const user = await User.findById(jwtPayload.userId);
    if (!user) return errorMessage(res, `Access denied`, 401);

    // send user data in req
    req.user = user;
  } catch (error) {
    return httpException({ res, message: 'Unauthorized', status: 401 });
  }

  next();
};
