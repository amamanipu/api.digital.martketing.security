/**
 * @fileoverview Healthy Controller
 * @version     1.0
 * @author      Herly Limachi, Yoski Burgos, Willins Escate
 * @copyright
 *
 * History
 * v1.0 – Se crea la clase
 * ----
 * La primera versión de routes fue escrita por Herly Limachi, Yoski Burgos, Willins Escate
 */

/**
* Registro de métodos para el controllador
* @param {any} server
* @descriptor Servidor Happi
*/
module.exports.register = async (server) => {
  server.route({
    method: 'GET',
    path: '/status/healthy',
    config: {
      handler: async () => 'Api is healthy.',
    },
  });
  server.route({
    method: 'GET',
    path: '/status/alive',
    config: {
      handler: async () => 'Api is alive.',
    },
  });
};
