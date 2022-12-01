/* eslint-disable no-console */
const GetAllApplication = require('./GetAllApplication');
const GetApplication = require('./GetApplication');
const CreateApplication = require('./CreateApplication');
const UpdateApplication = require('./UpdateApplication');

const getAll = async (server, params) => {
  try {
    return GetAllApplication(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all application',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetApplication(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get application',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, application) => {
  try {
    return CreateApplication(server, application);
  } catch (error) {
    console.error(
      {
        message: 'Error service create application',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, application, params) => {
  try {
    return UpdateApplication(server, application, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update application',
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
