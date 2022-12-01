const bcrypt = require('bcrypt');

const hashed = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const compare = async (password, passwordHashed) => bcrypt.compare(password, passwordHashed);

module.exports = {
  hashed,
  compare,
};
