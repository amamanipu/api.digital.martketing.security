/* eslint-disable no-console */
const GetAllApplicationOption = require('./GetAllApplicationOption');
const GetApplicationOption = require('./GetApplicationOption');
const CreateApplicationOption = require('./CreateApplicationOption');
const UpdateApplicationOption = require('./UpdateApplicationOption');

const getAll = async (server, params) => {
  try {
    return GetAllApplicationOption(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all application option',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetApplicationOption(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get application option',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, applicationOption) => {
  try {
    return CreateApplicationOption(server, applicationOption);
  } catch (error) {
    console.error(
      {
        message: 'Error service create application option',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, applicationOption, params) => {
  try {
    return UpdateApplicationOption(server, applicationOption, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update application option',
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
