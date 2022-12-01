const loginService = require('../use_cases/login/LoginService');
const organizationService = require('../use_cases/organization/OrganizationService');
const userService = require('../use_cases/user/UserService');
const responseBase = require('../../common/responseBase');
const constants = require('../../common/constants');
const tokenService = require('../use_cases/login/TokenService');

const validate = async (req, res) => {
  try {
    const server = await req.server;
    const user = await req.payload;
    const responseOrganization = await organizationService.get(server, {
      Name: user.OrganizationName,
    });

    if (responseOrganization === null) {
      return responseBase(res, constants.status.badRequest, 'El nombre de la organización no es válido');
    }

    const responseUser = await userService.get(server, {
      OrganizationId: responseOrganization.OrganizationId,
      LogonName: user.LogonName,
    }, ['IsPrivate']);

    if (responseUser === null) {
      return responseBase(res, constants.status.badRequest, 'El usuario no es válido');
    }

    if (await loginService.validate(user.Password, responseUser.Password)) {
      if (!responseUser.State) {
        return responseBase(res, constants.status.badRequest, 'El usuario se encuentra inactivo, comunicarse con su administrador');
      }

      if (!responseOrganization.State) {
        return responseBase(res, constants.status.badRequest, 'La organización se encuentra inactiva');
      }

      responseUser.Password = undefined;
      const token = await tokenService.generate(user);
      responseUser.Token = token;
      return responseBase(res, constants.status.success, 'El usuario es valido', responseUser);
    }

    return responseBase(res, constants.status.badRequest, 'La contraseña no es valida');
  } catch (error) {
    return responseBase(res, constants.status.internalServer, error.message);
  }
};

module.exports = {
  validate,
};
