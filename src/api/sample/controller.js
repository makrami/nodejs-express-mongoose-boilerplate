import httpException from '../../utils/http-exception.js';
import httpSuccess from '../../utils/http-success.js';
import Test from '../../models/test.model.js';
import User from '../../models/user.model.js';
import jwt from 'jsonwebtoken';
import appConfig from '../../config/app-config.js';

export default {
  /* -------------------------------------------------------------------------- */
  /*                                    USER                                    */
  /* -------------------------------------------------------------------------- */
  sampleCreateUser: async (req, res) => {
    try {
      let user = await User.findOne({ username: 'MrAnderson' });

      if (!user) user = await User.create({ username: 'MrAnderson' });

      const payload = { userId: user._id };
      const accessToken = jwt.sign(payload, appConfig.auth.user_access_token_secret, {
        expiresIn: appConfig.auth.user_access_token_expires_in,
      });

      httpSuccess({ res, message: 'User created successfully', status: 201, data: { user, accessToken } });
    } catch (error) {
      httpException({ res, error });
    }
  },

  getProfile: async (req, res) => {
    const { user } = req;

    try {
      httpSuccess({ res, data: user });
    } catch (error) {
      httpException({ res, error });
    }
  },

  /* -------------------------------------------------------------------------- */
  /*                                   SAMPLE                                   */
  /* -------------------------------------------------------------------------- */
  sampleApi: async (req, res) => {
    try {
      await Test.create({ username: 'MrAnderson' });
      const count = await Test.countDocuments();

      httpSuccess({ res, message: 'Sample API Success', data: count });
    } catch (error) {
      httpException({ res, error });
    }
  },
};
