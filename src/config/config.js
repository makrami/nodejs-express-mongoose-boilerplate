const nodeEnv = process.env.NODE_ENV || 'development';
export let config;

switch (nodeEnv) {
  case 'test':
    config = {
      env: 'test',
      databaseUrl: process.env.DATABASE_URL_TEST,
      port: process.env.PORT_TEST || 3001,
      userAccessTokenSecret: process.env.USER_ACCESS_TOKEN_SECRET_TEST,
      userAccessTokenSecretExpiresIn: process.env.USER_ACCESS_TOKEN_EXPIRES_IN_TEST,
    };
    break;

  default:
    config = {
      env: 'development',
      databaseUrl: process.env.DATABASE_URL,
      port: process.env.PORT || 3000,
      userAccessTokenSecret: process.env.USER_ACCESS_TOKEN_SECRET,
      userAccessTokenSecretExpiresIn: process.env.USER_ACCESS_TOKEN_EXPIRES_IN,
    };
    break;
}
