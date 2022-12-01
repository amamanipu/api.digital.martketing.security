const Joi = require('joi');

const paramsGetRoleSchema = Joi.object({
  roleId: Joi.number().required(),
});

module.exports = {
  paramsGetRoleSchema,
};
