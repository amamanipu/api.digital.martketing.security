/* eslint-disable no-console */
const passwordService = require('../password/PasswordService');

const validate = async (password, passwordHashed) => {
  try {
    return passwordService.compare(password, passwordHashed);
  } catch (error) {
    console.error(
      {
        message: 'Error service validate user',
        details: error.message,
      },
    );
    return false;
  }
};

module.exports = {
  validate,
};
