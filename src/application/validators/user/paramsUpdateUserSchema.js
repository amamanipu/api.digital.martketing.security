const Joi = require('joi');

const paramsUpdateUserSchema = Joi.object({
  userId: Joi.number().required(),
});

module.exports = {
  paramsUpdateUserSchema,
};
