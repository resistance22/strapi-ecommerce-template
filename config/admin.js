module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '50db4e87ef1496e5da6bcb70e75db461'),
  },
});
