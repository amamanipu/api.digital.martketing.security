/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
// Importamos repositorios
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const {
  organization,
  contact,
  user,
  role,
  userRole,
  application,
  applicationOption,
  applicationOptionActivity,
  roleApplicationOptionActivity,
  option,
  notificationQueue,
} = require('../../repositories');

// Override timezone formatting for MSSQL
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

const sequelize = {};
const models = {};
const client = async (server) => {
  const getConnection = async () => {
    try {
      const config = server.app.config.sql;
      const name = 'config_DB';
      if (!Object.prototype.hasOwnProperty.call(sequelize, name)) {
        const instance = new Sequelize(config);
        fs.readdirSync(path.join(__dirname, 'models'))
          .forEach((file) => {
            const model = require(path.join(__dirname, 'models', file))(instance, Sequelize);
            models[model.name] = model;
          });
        sequelize[name] = instance;
        sequelize[name].authenticate();
      }
      if (sequelize[name] == null) {
        throw new Error('Error en conectar a Base de datos.');
      }

      return { sequelize: sequelize[name], models };
    } catch (err) {
      console.error(
        {
          message: 'Error sql server',
          details: err,
        },
      );
      throw new Error('Error sql server');
    }
  };

  return {
    // Registramos los repositorios
    organization: await organization.register({ getConnection }),
    contact: await contact.register({ getConnection }),
    user: await user.register({ getConnection }),
    role: await role.register({ getConnection }),
    userRole: await userRole.register({ getConnection }),
    application: await application.register({ getConnection }),
    applicationOption: await applicationOption.register({ getConnection }),
    applicationOptionActivity: await applicationOptionActivity.register({ getConnection }),
    roleApplicationOptionActivity: await roleApplicationOptionActivity.register({ getConnection }),
    option: await option.register({ getConnection }),
    notificationQueue: await notificationQueue.register({ getConnection }),
  };
};

module.exports = client;
