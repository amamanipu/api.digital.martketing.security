/* eslint-disable no-console */
const GetAllRoleApplicationOptionActivity = require('./GetAllRoleApplicationOptionActivity');
const GetRoleApplicationOptionActivity = require('./GetRoleApplicationOptionActivity');
const CreateRoleApplicationOptionActivity = require('./CreateRoleApplicationOptionActivity');
const UpdateRoleApplicationOptionActivity = require('./UpdateRoleApplicationOptionActivity');
const RemoveRoleApplicationOptionActivity = require('./RemoveRoleApplicationOptionActivity');

const getAll = async (server, params) => {
  try {
    return GetAllRoleApplicationOptionActivity(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all role application option activity',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetRoleApplicationOptionActivity(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get role application option activity',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, roleApplicationOptionActivity) => {
  try {
    return CreateRoleApplicationOptionActivity(server, roleApplicationOptionActivity);
  } catch (error) {
    console.error(
      {
        message: 'Error service create role application option activity',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, roleApplicationOptionActivity, params) => {
  try {
    return UpdateRoleApplicationOptionActivity(server, roleApplicationOptionActivity, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update role application option activity',
        details: error.message,
      },
    );
    return null;
  }
};

const remove = async (server, params) => {
  try {
    return RemoveRoleApplicationOptionActivity(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service remove role application option activity',
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
  remove,
};
