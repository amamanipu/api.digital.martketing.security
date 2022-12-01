const sql = require('./sql');
const swagger = require('./swagger');

/**
 * Función Asíncrona para matriculación de plugin de Sql
 * @param {any} server
 * @descriptor Servidor Happi
 */
module.exports.register = async (server) => {
  // Server.register ==> registra plugins SQL en el servidor Happi(name,version,register)
  await server.register(sql);
  // Server.register ==> registra plugins Swagger en el servidor Happi(name,version,register)
  await server.register(swagger);
};
