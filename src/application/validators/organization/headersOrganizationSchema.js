const Joi = require('joi');
const constants = require('../../../common/constants');

const headersOrganizationSchema = Joi.object({
  authorization: Joi.string()
    .required()
    .messages(constants.messageHeaders),
}).unknown();

module.exports = { headersOrganizationSchema };
