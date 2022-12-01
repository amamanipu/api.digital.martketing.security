const roleService = require('../use_cases/role/RoleService');
const constants = require('../../common/constants');
const responseBase = require('../../common/responseBase');
const optionService = require('../use_cases/option/OptionService');
const organizationService = require('../use_cases/organization/OrganizationService');
const roleApplicationOptionActivityService = require('../use_cases/roleApplicationOptionActivity/RoleApplicationOptionActivityService');

const getAll = async (req, res) => {
  try {
    const server = await req.server;
    const headers = await req.headers;
    const roleList = await roleService.getAll(server, {
      OrganizationId: headers[constants.headers.organizationid],
    });
    return responseBase(res, constants.status.success, null, roleList);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const get = async (req, res) => {
  try {
    const server = await req.server;
    const headers = await req.headers;
    const params = await req.params;

    const responseOrganization = await organizationService.get(server, {
      OrganizationId: headers[constants.headers.organizationid],
    });

    const responseAllOptions = await optionService.getAllOptionRole(server, null);

    if (params.roleId !== 0) {
      const responseAllOptionsAssing = await optionService.getAllOptionUser(server, {
        RoleId: params.roleId,
      });

      responseAllOptions.map((optionRole) => {
        const optionRoleNew = optionRole;
        optionRoleNew.Check = responseAllOptionsAssing.some(
          (optionUser) => optionUser.ApplicationId === optionRole.ApplicationId
          && optionUser.OptionId === optionRole.OptionId,
        );
        return optionRoleNew;
      });
    } else {
      responseAllOptions.map((optionRole) => {
        const optionRoleNew = optionRole;
        optionRoleNew.Check = false;
        return optionRoleNew;
      });
    }

    if (!responseOrganization.Major) {
      return responseBase(res, constants.status.success, null, responseAllOptions.filter(
        (option) => option.OptionId !== 'ORGANIZATION',
      ));
    }

    return responseBase(res, constants.status.success, null, responseAllOptions);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const getOptionsUser = async (req, res) => {
  try {
    const server = await req.server;
    const params = await req.params;
    const optionsMenu = await optionService.getAllOptionUser(server, {
      RoleId: params.roleId,
    });
    return responseBase(res, constants.status.success, null, optionsMenu);
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const create = async (req, res) => {
  try {
    const server = await req.server;
    const headers = await req.headers;
    const role = await req.payload;
    const responseRole = await roleService.create(server, {
      Name: role.Name,
      OrganizationId: headers[constants.headers.organizationid],
      UserInsert: role.UserInsert,
    });

    await role.Options.forEach(async (option) => {
      await roleApplicationOptionActivityService.create(server, {
        RoleId: responseRole.RoleId,
        ApplicationId: option.ApplicationId,
        OptionId: option.OptionId,
        ActivityId: option.ActivityId,
      });
    });

    return responseBase(res, constants.status.created, 'El rol ha sido creado correctamente.');
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

const update = async (req, res) => {
  try {
    const server = await req.server;
    const headers = await req.headers;
    const params = await req.params;
    const role = await req.payload;

    await roleApplicationOptionActivityService.remove(server, {
      RoleId: params.roleId,
    });

    await role.Options.forEach(async (option) => {
      await roleApplicationOptionActivityService.create(server, {
        RoleId: params.roleId,
        ApplicationId: option.ApplicationId,
        OptionId: option.OptionId,
        ActivityId: option.ActivityId,
      });
    });

    await roleService.update(server, {
      Name: role.Name,
      State: role.State,
      UserUpdate: role.UserUpdate,
      DateUpdate: new Date(Date.now()).toString(),
    }, {
      OrganizationId: headers[constants.headers.organizationid],
      RoleId: params.roleId,
    });
    return responseBase(res, constants.status.success, 'El rol ha sido actualizado correctamente.');
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

module.exports = {
  getAll,
  get,
  getOptionsUser,
  create,
  update,
};
