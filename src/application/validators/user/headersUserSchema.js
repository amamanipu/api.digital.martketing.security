const Joi = require('joi');
const constants = require('../../../common/constants');

const headersUserSchema = Joi.object({
  'x-organizationid': Joi.number()
    .required()
    .messages(constants.messageHeaders),
  authorization: Joi.string()
    .required()
    .messages(constants.messageHeaders),
}).unknown();

module.exports = { headersUserSchema };
