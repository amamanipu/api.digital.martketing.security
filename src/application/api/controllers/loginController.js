/* eslint-disable no-console */
/**
 * @fileoverview Login Controller
 * @version     1.0
 * @author      Martin Elias, Angel Mamani
 * @copyright
 *
 * History
 * v1.0 – Se crea la clase
 * ----
 * La primera versión de routes fue escrita por Martin Elias, Angel Mamani
 */

const {
  responseSchema,
  payloadLoginSchema,
} = require('../../validators/index');
const login = require('../../services/loginService');

module.exports.register = async (server) => {
  server.route({
    method: 'POST',
    path: '/api/login',
    config: {
      cors: true,
      handler: login.validate,
      description: 'Validacion de Acceso',
      notes: 'Validacion de Acceso',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: { description: 'Success', schema: responseSchema },
            400: { description: 'Bad request', schema: responseSchema },
            412: { description: 'Precondition failed', schema: responseSchema },
            500: { description: 'Internal server error', schema: responseSchema },
          },
        },
      },
      validate: {
        payload: payloadLoginSchema,
        failAction: async (request, h, err) => {
          console.error(
            {
              message: 'Caught exception',
              details: JSON.stringify(err),
            },
          );
          throw err;
        },
      },
    },
  });
};
