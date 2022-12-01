/* eslint-disable no-console */
const GetAllUser = require('./GetAllUser');
const GetUser = require('./GetUser');
const CreateUser = require('./CreateUser');
const UpdateUser = require('./UpdateUser');
const CreateContact = require('../contact/CreateContact');
const UpdateContact = require('../contact/UpdateContact');
const passwordService = require('../password/PasswordService');

const getAll = async (server, params) => {
  try {
    return GetAllUser(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service get all user',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params, exclude = null) => {
  try {
    return GetUser(server, params, exclude);
  } catch (error) {
    console.error(
      {
        message: 'Error service get user',
        details: error.message,
      },
    );
    return null;
  }
};

const create = async (server, user) => {
  try {
    const responseContact = await CreateContact(server, {
      Names: user.Names,
      LastNames: user.LastNames,
      Email: user.Email,
      PhoneNumber: user.PhoneNumber,
      Photo: user.Photo,
    });

    return CreateUser(server, {
      UserId: responseContact.ContactId,
      LogonName: user.LogonName,
      Password: await passwordService.hashed(user.Password),
      OrganizationId: user.OrganizationId,
      RoleId: user.RoleId,
      UserInsert: user.UserInsert,
    });
  } catch (error) {
    console.error(
      {
        message: 'Error service create user',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, user, params) => {
  try {
    const responseUser = await UpdateContact(server, {
      Names: user.Names,
      LastNames: user.LastNames,
      Email: user.Email,
      PhoneNumber: user.PhoneNumber,
      Photo: user.Photo,
    }, {
      ContactId: params.UserId,
    });

    await UpdateUser(server, {
      RoleId: user.RoleId,
      State: user.State,
      UserUpdate: user.UserUpdate,
      DateUpdate: new Date(Date.now()).toString(),
    }, {
      UserId: params.UserId,
    });

    return responseUser;
  } catch (error) {
    console.error(
      {
        message: 'Error service update user',
        details: error.message,
      },
    );
    return null;
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
};
