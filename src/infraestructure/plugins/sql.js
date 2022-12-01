const dataClient = require('../orm/sequelize/sequelize');

module.exports = {
  name: 'sql',
  version: '1.0.0',
  register: async (server) => {
    const client = await dataClient(server);
    server.expose('client', client);
  },
};
