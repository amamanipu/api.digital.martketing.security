const Joi = require('joi');

const payloadCreateOrganizationSchema = Joi.object({
  Name: Joi.string().trim().required(),
  UserInsert: Joi.string().trim().required(),
  Email: Joi.string().trim().required(),
}).label('organizationCreate');

module.exports = { payloadCreateOrganizationSchema };
