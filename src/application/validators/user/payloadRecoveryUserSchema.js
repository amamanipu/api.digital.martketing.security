const Joi = require('joi');

const payloadRecoveryUserSchema = Joi.object({
  OrganizationName: Joi.string().trim().required(),
  Email: Joi.string().trim().required(),
}).label('userRecovery');

module.exports = { payloadRecoveryUserSchema };
