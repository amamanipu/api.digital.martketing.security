const organizationService = require('../use_cases/organization/OrganizationService');
const userService = require('../use_cases/user/UserService');
const roleService = require('../use_cases/role/RoleService');
const userRoleService = require('../use_cases/userRole/UserRoleService');
const roleApplicationOptionActivityService = require('../use_cases/roleApplicationOptionActivity/RoleApplicationOptionActivityService');
const constants = require('../../common/constants');
const responseBase = require('../../common/responseBase');
const notificationQueueService = require('../use_cases/notificationQueue/NotificationQueueService');

const getAll = async (req, res) => {
  try {
    const server = await req.server;
    const params = await req.params;
    const organizationList = await organizationService.getAll(server, params);
    return responseBase(res, constants.status.success, null, organizationList);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const get = async (req, res) => {
  try {
    const server = await req.server;
    const params = await req.params;
    const responseUser = await organizationService.get(server, params);
    return responseBase(res, constants.status.success, null, responseUser);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const create = async (req, res) => {
  try {
    const server = await req.server;
    const organization = await req.payload;

    const organizationExist = await organizationService.get(server, {
      Name: organization.Name.toUpperCase(),
      UserInsert: organization.UserInsert,
    });

    if (organizationExist !== null) {
      return responseBase(res, constants.status.success, 'El nombre de la organización ya existe, debe ingresar uno diferente.');
    }

    const responseOrganization = await organizationService.create(server, {
      Name: organization.Name.toUpperCase(),
      UserInsert: organization.UserInsert,
    });

    const responseRole = await roleService.create(server, {
      OrganizationId: responseOrganization.OrganizationId,
      Name: constants.defaultValues.roleAdmin,
    });

    const responseUser = await userService.create(server, {
      Names: constants.defaultValues.adminName,
      LogonName: constants.defaultValues.logonName,
      Password: `${constants.defaultValues.password}${responseOrganization.OrganizationId}`,
      OrganizationId: responseOrganization.OrganizationId,
      RoleId: responseRole.RoleId,
      UserInsert: responseOrganization.UserInsert,
      Email: organization.Email,
    });

    await userRoleService.create(server, {
      UserId: responseUser.UserId,
      RoleId: responseRole.RoleId,
    });

    constants.optionsSecurity.forEach(async (element) => {
      await roleApplicationOptionActivityService.create(server, {
        RoleId: responseRole.RoleId,
        ApplicationId: constants.application.security,
        OptionId: element,
        ActivityId: 'QUERY',
      });
    });

    // Send Notification
    await notificationQueueService.create(server, {
      IdNotification: constants.notification.organizationCreate,
      UserId: responseUser.UserId,
      Email: organization.Email,
      UserInsert: responseOrganization.UserInsert,
    });

    return responseBase(res, constants.status.created, 'La organización ha sido creado correctamente.');
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const update = async (req, res) => {
  try {
    const server = await req.server;
    const organization = await req.payload;
    const params = await req.params;
    await organizationService.update(server, {
      State: organization.State,
      UserUpdate: organization.UserUpdate,
      DateUpdate: new Date(Date.now()).toString(),
    }, params);
    return responseBase(res, constants.status.success, 'La organización ha sido actualizado correctamente.');
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

module.exports = {
  getAll,
  get,
  create,
  update,
};
