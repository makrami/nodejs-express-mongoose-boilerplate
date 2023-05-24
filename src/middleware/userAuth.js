import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { config } from '../config/config.js';
import { UnauthorizedException } from '../utils/response-handler/httpError.js';
import moment from 'moment';

export const checkJwt = async (req, res, next) => {
  try {
    // get the user with the token
    const userAccessTokenSecret = config.userAccessTokenSecret;
    let jwtPayload;
    let tokenPrefix
    let token

    if (req.headers.authorization) {
      tokenPrefix = req.headers.authorization.split(' ')[0];
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token || !tokenPrefix) throw new UnauthorizedException('Missing api key');

    // try to validate the token and get data
    jwtPayload = jwt.verify(token, userAccessTokenSecret);

    // find user with the user id
    const user = await User.findById(jwtPayload.userId);
    if (!user) throw new UnauthorizedException('Access denied');

    // send user data in req
    req.user = user;
  } catch (error) {
    res.status(401).send({
      statusCode: 401,
      error: "Unauthorized",
      message: "Invalid token"
    }).end()
  }

  next()
};
