/* eslint-disable no-console */
/**
 * @fileoverview Organization Controller
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
  paramsGetOrganizationSchema,
  paramsUpdateOrganizationSchema,
  payloadCreateOrganizationSchema,
  payloadUpdateOrganizationSchema,
  headersOrganizationSchema,
} = require('../../validators/index');
const organization = require('../../services/organizationService');

module.exports.register = async (server) => {
  server.route({
    method: 'GET',
    path: '/api/organizations',
    config: {
      handler: organization.getAll,
      description: 'Se obtiene la información de las organizaciones',
      notes: 'Se obtiene la información de las organizaciones',
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
        headers: headersOrganizationSchema,
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
    path: '/api/organization/{organizationId}',
    config: {
      handler: organization.get,
      description: 'Se obtiene la información de la organizacion',
      notes: 'Se obtiene la información de la organizacion',
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
        headers: headersOrganizationSchema,
        params: paramsGetOrganizationSchema,
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
    path: '/api/organization',
    config: {
      handler: organization.create,
      description: 'Registrar Organización',
      notes: 'Registrar Organización',
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
        headers: headersOrganizationSchema,
        payload: payloadCreateOrganizationSchema,
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
    path: '/api/organization/{organizationId}',
    config: {
      handler: organization.update,
      description: 'Actualizar Organización',
      notes: 'Actualizar Organización',
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
        headers: headersOrganizationSchema,
        params: paramsUpdateOrganizationSchema,
        payload: payloadUpdateOrganizationSchema,
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
