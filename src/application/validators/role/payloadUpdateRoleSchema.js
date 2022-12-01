const Joi = require('joi');

const payloadUpdateRoleSchema = Joi.object({
  Name: Joi.string().trim().required(),
  State: Joi.bool().required(),
  UserUpdate: Joi.string().trim().required(),
  Options: Joi.array().required(),
}).label('roleUpdate');

module.exports = { payloadUpdateRoleSchema };
