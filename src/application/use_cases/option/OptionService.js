/* eslint-disable no-console */
const GetAllOptionRole = require('./GetAllOptionRole');
const GetAllOptionUser = require('./GetAllOptionUser');

const getAllOptionRole = async (server, params) => {
  try {
    return GetAllOptionRole(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all option menu role',
        details: error.message,
      },
    );
    return null;
  }
};

const getAllOptionUser = async (server, params) => {
  try {
    return GetAllOptionUser(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get option menu user',
        details: error.message,
      },
    );
    return null;
  }
};

module.exports = {
  getAllOptionRole,
  getAllOptionUser,
};
