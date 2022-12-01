const Joi = require('joi');

const responseSchema = Joi.object({
  statusCode: Joi.number().required(),
  message: Joi.string().required(),
  data: Joi.object() ?? Joi.array(),
}).label('response');

module.exports = { responseSchema };
