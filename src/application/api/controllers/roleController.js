/* eslint-disable no-console */
/**
 * @fileoverview Role Controller
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
  paramsGetRoleSchema,
  paramsGetUserRoleSchema,
  paramsUpdateRoleSchema,
  payloadCreateRoleSchema,
  payloadUpdateRoleSchema,
  headersRoleSchema,
} = require('../../validators/index');
const role = require('../../services/roleService');

module.exports.register = async (server) => {
  server.route({
    method: 'GET',
    path: '/api/roles',
    config: {
      cors: true,
      handler: role.getAll,
      description: 'Se obtiene la información de los roles',
      notes: 'Se obtiene la información de los roles',
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
        headers: headersRoleSchema,
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
    path: '/api/role/{roleId}',
    config: {
      handler: role.get,
      description: 'Se obtiene la información del rol',
      notes: 'Se obtiene la información del rol',
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
        headers: headersRoleSchema,
        params: paramsGetRoleSchema,
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
    path: '/api/role/{roleId}/{userId}',
    config: {
      handler: role.getOptionsUser,
      description: 'Se obtiene la información del rol',
      notes: 'Se obtiene la información del rol',
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
        headers: headersRoleSchema,
        params: paramsGetUserRoleSchema,
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
    path: '/api/role',
    config: {
      handler: role.create,
      description: 'Registrar Rol',
      notes: 'Registrar Rol',
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
        headers: headersRoleSchema,
        payload: payloadCreateRoleSchema,
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
    path: '/api/role/{roleId}',
    config: {
      handler: role.update,
      description: 'Actualizar Rol',
      notes: 'Actualizar Rol',
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
        headers: headersRoleSchema,
        params: paramsUpdateRoleSchema,
        payload: payloadUpdateRoleSchema,
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
