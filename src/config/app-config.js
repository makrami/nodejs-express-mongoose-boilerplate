export default {
  app: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
  },
  db: {
    database_url: process.env.DATABASE_URL,
  },
  winiston: {
    //   logpath: '/iLrnLogs/logs/',
  },
  auth: {
    user_access_token_secret: process.env.USER_ACCESS_TOKEN_SECRET,
    user_access_token_expires_in: process.env.USER_ACCESS_TOKEN_EXPIRES_IN,
  },
};
