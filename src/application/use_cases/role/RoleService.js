/* eslint-disable no-console */
const GetAllRole = require('./GetAllRole');
const GetRole = require('./GetRole');
const CreateRole = require('./CreateRole');
const UpdateRole = require('./UpdateRole');

const getAll = async (server, params) => {
  try {
    return GetAllRole(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all role',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetRole(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get role',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, role) => {
  try {
    return CreateRole(server, role);
  } catch (error) {
    console.error(
      {
        message: 'Error service create role',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, rol, params) => {
  try {
    return UpdateRole(server, rol, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update role',
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
