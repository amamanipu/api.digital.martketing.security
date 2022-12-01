const Joi = require('joi');

const paramsGetAllUserSchema = Joi.object({
  organizationId: Joi.number().required(),
});

module.exports = {
  paramsGetAllUserSchema,
};
