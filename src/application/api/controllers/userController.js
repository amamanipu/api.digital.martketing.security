/* eslint-disable no-console */
/**
 * @fileoverview User Controller
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
  paramsGetUserSchema,
  paramsUpdateUserSchema,
  payloadCreateUserSchema,
  payloadUpdateUserSchema,
  headersUserSchema,
  payloadRecoveryUserSchema,
} = require('../../validators/index');
const user = require('../../services/userService');

module.exports.register = async (server) => {
  server.route({
    method: 'GET',
    path: '/api/users',
    config: {
      cors: true,
      handler: user.getAll,
      description: 'Se obtiene la información de los usuarios',
      notes: 'Se obtiene la información de los usuarios',
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
        headers: headersUserSchema,
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
  server.route({
    method: 'GET',
    path: '/api/user/{userId}',
    config: {
      cors: true,
      handler: user.get,
      description: 'Se obtiene la información del usuario',
      notes: 'Se obtiene la información del usuario',
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
        headers: headersUserSchema,
        params: paramsGetUserSchema,
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
  server.route({
    method: 'POST',
    path: '/api/user',
    config: {
      cors: true,
      handler: user.create,
      description: 'Registrar Usuario',
      notes: 'Registrar Usuario',
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
        headers: headersUserSchema,
        payload: payloadCreateUserSchema,
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
  server.route({
    method: 'PUT',
    path: '/api/user/{userId}',
    config: {
      cors: true,
      handler: user.update,
      description: 'Actualizar Usuario',
      notes: 'Actualizar Usuario',
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
        headers: headersUserSchema,
        params: paramsUpdateUserSchema,
        payload: payloadUpdateUserSchema,
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
  server.route({
    method: 'POST',
    path: '/api/user/recovery',
    config: {
      cors: true,
      handler: user.recovery,
      description: 'Recuperar Contraseña',
      notes: 'Recuperar Contraseña',
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
        payload: payloadRecoveryUserSchema,
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
