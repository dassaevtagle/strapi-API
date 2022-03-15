module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ee9ab4b52d66706017e5e4ebfdccdbbe'),
  },
});
