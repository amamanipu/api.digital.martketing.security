const channel = {
  api: 'API',
};

const country = {
  Peru: 'PE',
  Chile: 'CL',
};

const headers = {
  organizationid: 'x-organizationid',
};

const defaultValues = {
  adminName: 'Administrador',
  logonName: 'admin',
  password: 'E30E25C',
  roleAdmin: 'Administrador',
};

const messageHeaders = {
  'string.empty': '{#key} is not allowed to be empty',
  'string.max':
    '{#key} length must be less than or equal to {#limit} characters long',
  'string.pattern.base':
    '{#key} with value {#value} , fails to match the required pattern: {#regex} ',
  'any.required': '{#key} must be required',
};

const status = {
  success: {
    code: 200,
    message: 'Success',
  },
  created: {
    code: 201,
    message: 'Created',
  },
  noContent: {
    code: 204,
    message: 'No Content',
  },
  badRequest: {
    code: 400,
    message: 'Bad Request',
  },
  preconditionFailed: {
    code: 412,
    message: 'Precondition Failed',
  },
  internalServer: {
    code: 500,
    message: 'Internal Server Error',
  },
};

const application = {
  marketing: 'MARKETING',
  security: 'SECURITY',
};

const notification = {
  recoveryPassword: 1,
  organizationCreate: 2,
};

const optionsSecurity = ['ROLE', 'USER'];

module.exports.channel = channel;
module.exports.country = country;
module.exports.headers = headers;
module.exports.defaultValues = defaultValues;
module.exports.messageHeaders = messageHeaders;
module.exports.status = status;
module.exports.application = application;
module.exports.optionsSecurity = optionsSecurity;
module.exports.notification = notification;
