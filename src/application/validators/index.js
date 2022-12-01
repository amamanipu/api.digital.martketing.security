const { responseSchema } = require('./responseSchema');

const { paramsGetAllUserSchema } = require('./user/paramsGetAllUserSchema');
const { paramsGetUserSchema } = require('./user/paramsGetUserSchema');
const { paramsUpdateUserSchema } = require('./user/paramsUpdateUserSchema');
const { payloadUpdateUserSchema } = require('./user/payloadUpdateUserSchema');
const { payloadCreateUserSchema } = require('./user/payloadCreateUserSchema');
const { headersUserSchema } = require('./user/headersUserSchema');
const { payloadRecoveryUserSchema } = require('./user/payloadRecoveryUserSchema');

const { paramsGetOrganizationSchema } = require('./organization/paramsGetOrganizationSchema');
const { paramsUpdateOrganizationSchema } = require('./organization/paramsUpdateOrganizationSchema');
const { payloadCreateOrganizationSchema } = require('./organization/payloadCreateOrganizationSchema');
const { payloadUpdateOrganizationSchema } = require('./organization/payloadUpdateOrganizationSchema');
const { headersOrganizationSchema } = require('./organization/headersOrganizationSchema');

const { paramsGetAllRoleSchema } = require('./role/paramsGetAllRoleSchema');
const { paramsGetRoleSchema } = require('./role/paramsGetRoleSchema');
const { paramsUpdateRoleSchema } = require('./role/paramsUpdateRoleSchema');
const { payloadUpdateRoleSchema } = require('./role/payloadUpdateRoleSchema');
const { payloadCreateRoleSchema } = require('./role/payloadCreateRoleSchema');
const { headersRoleSchema } = require('./role/headersRoleSchema');
const { paramsGetUserRoleSchema } = require('./role/paramsGetUserRoleSchema');

const { payloadLoginSchema } = require('./login/payloadLoginSchema');

module.exports = {
  responseSchema,

  paramsGetAllUserSchema,
  paramsGetUserSchema,
  paramsUpdateUserSchema,
  payloadCreateUserSchema,
  payloadUpdateUserSchema,
  headersUserSchema,
  payloadRecoveryUserSchema,

  paramsGetOrganizationSchema,
  paramsUpdateOrganizationSchema,
  payloadCreateOrganizationSchema,
  payloadUpdateOrganizationSchema,
  headersOrganizationSchema,

  paramsGetAllRoleSchema,
  paramsGetRoleSchema,
  paramsUpdateRoleSchema,
  payloadCreateRoleSchema,
  payloadUpdateRoleSchema,
  headersRoleSchema,
  paramsGetUserRoleSchema,

  payloadLoginSchema,
};
