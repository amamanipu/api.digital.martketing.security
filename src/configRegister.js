/**
 * @fileoverview routes para API de notificación de Cobranza
 * @version     1.0
 * @version     1.0
 * @author      Herly Limachi, Yoski Burgos, Willins Escate
 * @copyright
 *
 * History
 * v1.0 – Se crea la clase
 * ----
 * La primera versión de routes fue escrita por Herly Limachi, Yoski Burgos, Willins Escate
*/

const plugins = require('./infraestructure/plugins/index');
const routes = require('./application/api/routes/routes');

/**
* Función Asíncrona para matriculación de plugins y controladores.
* @param {any} server
* @descriptor Servidor Happi
*/
module.exports.register = async (server) => {
  // Registrando plugins en servidor Happi
  await plugins.register(server);
  // Registrando rutas en servidor Happi
  await routes.register(server);
};
