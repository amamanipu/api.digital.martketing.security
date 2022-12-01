const Joi = require('joi');

const paramsGetUserSchema = Joi.object({
  userId: Joi.number().required(),
});

module.exports = {
  paramsGetUserSchema,
};
