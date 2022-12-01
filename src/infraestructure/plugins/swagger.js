const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

/**
 * Función Asíncrona para matriculación de plugin de swagger
 * @param {any} server
 * @descriptor Servidor Happi
 */
module.exports = {
  name: 'swagger',
  version: '1.0.0',
  register: async (server) => {
    const swaggerOptions = {
      info:
      {
        title: 'API Security - Digital Marketing',
        description: 'Metodos definidos para el contrato',
        contact: {
          name: 'Angel Mamani',
          email: 'amamani.9508@gmail.com',
        },
      },
    };

    await server.register([Inert, Vision,
      {
        plugin: HapiSwagger,
        options: swaggerOptions,
      },
    ]);
  },
};
