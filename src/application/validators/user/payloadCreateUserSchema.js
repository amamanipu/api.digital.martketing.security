const Joi = require('joi');

const payloadCreateUserSchema = Joi.object({
  Names: Joi.string().required(),
  LastNames: Joi.string().allow(null).allow(''),
  Email: Joi.string().allow(null).allow(''),
  PhoneNumber: Joi.string().allow(null).allow(''),
  Photo: Joi.string().allow(null).allow(''),
  LogonName: Joi.string().trim().required(),
  Password: Joi.string().trim().required(),
  PasswordRepeat: Joi.string().trim().required(),
  OrganizationId: Joi.number().required(),
  RoleId: Joi.number().required(),
  UserInsert: Joi.string().trim().required(),
}).label('userCreate');

module.exports = { payloadCreateUserSchema };
