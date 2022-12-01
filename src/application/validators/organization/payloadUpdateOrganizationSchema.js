const Joi = require('joi');

const payloadUpdateOrganizationSchema = Joi.object({
  Name: Joi.string().required(),
  State: Joi.bool().required(),
  UserUpdate: Joi.string().trim().required(),
}).label('organizationUpdate');

module.exports = { payloadUpdateOrganizationSchema };
