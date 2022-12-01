/* eslint-disable no-console */
const GetAllUserRole = require('./GetAllUserRole');
const GetUserRole = require('./GetUserRole');
const CreateUserRole = require('./CreateUserRole');
const UpdateUserRole = require('./UpdateUserRole');

const getAll = async (server, params) => {
  try {
    return GetAllUserRole(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all user role',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetUserRole(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get user role',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, userRole) => {
  try {
    return CreateUserRole(server, userRole);
  } catch (error) {
    console.error(
      {
        message: 'Error service create user role',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, userRole, params) => {
  try {
    return UpdateUserRole(server, userRole, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update user role',
        details: error.message,
      },
    );
    return null;
  }
};

module.exports = {
  getAll,
  create,
  get,
  update,
};
