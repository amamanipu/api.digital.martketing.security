const Joi = require('joi');

const payloadUpdateUserSchema = Joi.object({
  Names: Joi.string().required(),
  LastNames: Joi.string().allow(null).allow(''),
  Email: Joi.string().allow(null).allow(''),
  PhoneNumber: Joi.string().allow(null).allow(''),
  Photo: Joi.string().allow(null).allow(''),
  UserUpdate: Joi.string().trim().required(),
  RoleId: Joi.number().required(),
  State: Joi.bool().required(),
}).label('userUpdate');

module.exports = { payloadUpdateUserSchema };
