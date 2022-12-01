/* eslint-disable no-console */
const GetAllContact = require('./GetAllContact');
const GetContact = require('./GetContact');
const CreateContact = require('./CreateContact');
const UpdateContact = require('./UpdateContact');

const getAll = async (server, params) => {
  try {
    return GetAllContact(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all contact',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetContact(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get contact',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, contact) => {
  try {
    return CreateContact(server, contact);
  } catch (error) {
    console.error(
      {
        message: 'Error service create contact',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, contact, params) => {
  try {
    return UpdateContact(server, contact, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update contact',
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
