const Joi = require('joi');

const payloadCreateRoleSchema = Joi.object({
  Name: Joi.string().trim().required(),
  UserInsert: Joi.string().trim().required(),
  Options: Joi.array().required(),
}).label('roleCreate');

module.exports = { payloadCreateRoleSchema };
