module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aba1d5b7a6d57e470bef50852da577e2'),
  },
});
