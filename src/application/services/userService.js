const userService = require('../use_cases/user/UserService');
const constants = require('../../common/constants');
const responseBase = require('../../common/responseBase');
const organizationService = require('../use_cases/organization/OrganizationService');
const notificationQueueService = require('../use_cases/notificationQueue/NotificationQueueService');

const getAll = async (req, res) => {
  try {
    const server = await req.server;
    const headers = await req.headers;
    const userList = await userService.getAll(server, {
      OrganizationId: headers[constants.headers.organizationid],
    });
    return responseBase(res, constants.status.success, null, userList);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const get = async (req, res) => {
  try {
    const server = await req.server;
    const headers = await req.headers;
    const params = await req.params;
    const responseUser = await userService.get(server, {
      OrganizationId: headers[constants.headers.organizationid],
      UserId: params.userId,
    });
    return responseBase(res, constants.status.success, null, responseUser);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const create = async (req, res) => {
  try {
    const server = await req.server;
    const user = await req.payload;
    const userExist = await userService.get(server, {
      LogonName: user.LogonName,
      OrganizationId: user.OrganizationId,
    });

    if (userExist !== null) {
      return responseBase(res, constants.status.success, 'El usuario ya existe, debe ingresar uno diferente.');
    }

    const responseUser = await userService.create(server, user);
    return responseBase(res, constants.status.created, 'El usuario ha sido creado correctamente.', responseUser);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const update = async (req, res) => {
  try {
    const server = await req.server;
    const headers = await req.headers;
    const params = await req.params;
    const user = await req.payload;
    const responseUser = await userService.update(server, user, {
      OrganizationId: headers[constants.headers.organizationid],
      UserId: params.userId,
    });
    return responseBase(res, constants.status.success, 'El usuario ha sido actualizado correctamente.', responseUser);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const recovery = async (req, res) => {
  try {
    const server = await req.server;
    const recoveryUser = await req.payload;
    const responseOrganization = await organizationService.get(server, {
      Name: recoveryUser.OrganizationName.toUpperCase(),
    });

    if (responseOrganization === null) {
      return responseBase(res, constants.status.badRequest, 'El nombre de la organización no es valida');
    }

    const responseUsers = await userService.getAll(server, {
      OrganizationId: responseOrganization.OrganizationId,
    });

    let existUser = false;
    existUser = responseUsers.some((item) => item.Contact.Email === recoveryUser.Email);

    if (!existUser) {
      return responseBase(res, constants.status.badRequest, 'El correo no se encuentra registrado');
    }

    const responseUser = responseUsers.find((item) => item.Contact.Email === recoveryUser.Email);

    // Send Notification
    await notificationQueueService.create(server, {
      IdNotification: constants.notification.recoveryPassword,
      UserId: responseUser.UserId,
      Email: responseUser.Contact.Email,
      UserInsert: responseUser.LogonName,
    });

    return responseBase(res, constants.status.success, 'Se envió correctamente el correo');
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
  recovery,
};
