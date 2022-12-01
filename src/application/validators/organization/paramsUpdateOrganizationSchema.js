const Joi = require('joi');

const paramsUpdateOrganizationSchema = Joi.object({
  organizationId: Joi.number().required(),
});

module.exports = { paramsUpdateOrganizationSchema };
