const jwt = require('jsonwebtoken');

const generate = async (user) => jwt.sign({
  user,
}, 'secret-amp-meu', { expiresIn: '1h' });

module.exports = {
  generate,
};
