const Joi = require('joi');

const paramsGetOrganizationSchema = Joi.object({
  organizationId: Joi.number().required(),
});

module.exports = {
  paramsGetOrganizationSchema,
};
