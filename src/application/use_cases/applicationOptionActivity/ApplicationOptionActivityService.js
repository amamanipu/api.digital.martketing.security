/* eslint-disable no-console */
const GetAllApplicationOptionActivity = require('./GetAllApplicationOptionActivity');
const GetApplicationOptionActivity = require('./GetApplicationOptionActivity');
const CreateApplicationOptionActivity = require('./CreateApplicationOptionActivity');
const UpdateApplicationOptionActivity = require('./UpdateApplicationOptionActivity');

const getAll = async (server, params) => {
  try {
    return GetAllApplicationOptionActivity(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all application option activity',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetApplicationOptionActivity(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get application option activity',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, applicationOptionActivity) => {
  try {
    return CreateApplicationOptionActivity(server, applicationOptionActivity);
  } catch (error) {
    console.error(
      {
        message: 'Error service create application option activity',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, applicationOptionActivity, params) => {
  try {
    return UpdateApplicationOptionActivity(server, applicationOptionActivity, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update application option activity',
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
