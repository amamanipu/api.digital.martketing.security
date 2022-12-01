/**
 * A config
 * @typedef {Object} Config
 * @property {string} prefix - Prefix Route MicroServices
 * @property {number} port - Port Listen MicroServices
  */

module.exports = {
  loadConfig: (secrets) => ({
    prefix: '',
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    sql: {
      dialect: 'mssql',
      host: secrets.get('SQL_SERVER'),
      database: secrets.get('SQL_DATABASE'),
      username: secrets.get('SQL_USER'),
      password: secrets.get('SQL_PASSWORD'),
      port: secrets.get('SQL_PORT'),
      define: {
        // Table names won't be pluralized.
        freezeTableName: true,
        // All tables won't have "createdAt" and "updatedAt" Auto fields.
        timestamps: false,
      },
      dialectOptions: {
        options: {
          requestTimeout: 300000,
          connectTimeout: 60000,
          validateBulkLoadParameters: false,
          encrypt: true,
        },
      },
      pool: {
        max: 30,
        min: 0,
        acquire: 60000,
        idle: 5000,
      },
    },
  }),
};
