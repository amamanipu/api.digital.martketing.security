const Joi = require('joi');

const paramsGetUserRoleSchema = Joi.object({
  roleId: Joi.number().required(),
  userId: Joi.number().required(),
});

module.exports = {
  paramsGetUserRoleSchema,
};
