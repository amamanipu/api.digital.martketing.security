module.exports = async (res, status, message = null, data = null) => res.response({
  statusCode: status.code,
  message: (message === null) ? status.message : message,
  data,
}).code(status.code);
