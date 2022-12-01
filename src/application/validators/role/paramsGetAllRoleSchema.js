const Joi = require('joi');

const paramsGetAllRoleSchema = Joi.object({
  organizationId: Joi.number().required(),
});

module.exports = {
  paramsGetAllRoleSchema,
};
