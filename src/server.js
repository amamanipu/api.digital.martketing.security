/**
 * @fileoverview Clase que configura la aplicacion como API
 * @version     1.0
 * @author      Herly Limachi, Yoski Burgos, Willins Escate
 * @copyright
 *
 * History
 * v1.0 – Se crea la clase
 * ----
 * La primera versión de routes fue escrita por Herly Limachi, Yoski Burgos, Willins Escate
 */

const Hapi = require('@hapi/hapi');
const configRegister = require('./configRegister');

/**
 * Función Asíncrona para matriculación de controladores.
 * @param {any} server
 * @descriptor Registro de matriculacion de controladores
 * que reciben como parametro la configuración registrada en config.
 */
const app = async (config) => {
  const { host, port, prefix } = config;
  /**
  * Servidor Happi
  */
  const server = Hapi.server({ host, port });
  server.realm.modifiers.route.prefix = prefix;

  // Adiciona a la propiedad app la propiedad config asignandole el objeto config
  server.app.config = config;
  await configRegister.register(server);
  return server;
};

module.exports = app;
