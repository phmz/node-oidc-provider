const { InvalidClientAuth } = require('../helpers/errors');
const instance = require('../helpers/weak_cache');

module.exports = async function tokenCredentialAuth(ctx, actual, expected) {
  const isValidSecret = await instance(ctx.oidc.provider).configuration('compareClientSecret')(ctx, actual, expected);
  if (!isValidSecret) {
    throw new InvalidClientAuth('invalid secret provided');
  }
};
