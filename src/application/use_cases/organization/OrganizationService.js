/* eslint-disable no-console */
const GetAllOrganization = require('./GetAllOrganization');
const GetOrganization = require('./GetOrganization');
const CreateOrganization = require('./CreateOrganization');
const UpdateOrganization = require('./UpdateOrganization');

const getAll = async (server, params) => {
  try {
    return GetAllOrganization(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all organization',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetOrganization(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get organization',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, organization) => {
  try {
    return CreateOrganization(server, organization);
  } catch (error) {
    console.error(
      {
        message: 'Error service create organization',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, organization, params) => {
  try {
    return UpdateOrganization(server, organization, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update organization',
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
