import {} from 'dotenv/config';
const nodeEnv = process.env.NODE_ENV;

export let config = {
  env: 'development',
  databaseUri: process.env.DATABASE_URI,
  port: process.env.PORT || 3000,
  userAccessTokenSecret: process.env.USER_ACCESS_TOKEN_SECRET,
  userAccessTokenSecretExpiresIn: process.env.USER_ACCESS_TOKEN_EXPIRES_IN,
};

switch (nodeEnv) {
  case 'test':
    config.env = 'test';
    config.databaseUri = process.env.DATABASE_URI_TEST;
    config.port = process.env.PORT_TEST || 3001;
    config.userAccessTokenSecret = process.env.USER_ACCESS_TOKEN_SECRET_TEST;
    config.userAccessTokenSecretExpiresIn = process.env.USER_ACCESS_TOKEN_EXPIRES_IN_TEST;
    break;

  default:
    break;
}
