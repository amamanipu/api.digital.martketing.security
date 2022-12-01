const Joi = require('joi');

const payloadLoginSchema = Joi.object({
  OrganizationName: Joi.string().required(),
  LogonName: Joi.string().trim().required(),
  Password: Joi.string().trim().required(),
}).label('login');

module.exports = { payloadLoginSchema };
