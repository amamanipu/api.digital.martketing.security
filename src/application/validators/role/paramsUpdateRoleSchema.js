const Joi = require('joi');

const paramsUpdateRoleSchema = Joi.object({
  roleId: Joi.number().required(),
});

module.exports = {
  paramsUpdateRoleSchema,
};
