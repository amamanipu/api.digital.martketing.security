/**
 * @fileoverview Routes for API's of orders.
 * @version     1.0
 * @author      Martin Elias, Angel Mamani
 * @copyright
 *
 * History
 * v1.0 – Se crea la clase
 * ----
 * La primera versión de routes fue escrita por Herly Limachi, Yoski Burgos, Willins Escate
 */

const healthyController = require('../controllers/healthyController');
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const organizationController = require('../controllers/organizationController');
const loginController = require('../controllers/loginController');

/**
 * Función Asincrona para matriculación de controladores.
 * @param {any} server
 * @descriptor Servidor Happi
 */
module.exports.register = async (server) => {
  await healthyController.register(server);
  await userController.register(server);
  await roleController.register(server);
  await organizationController.register(server);
  await loginController.register(server);
};
