/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.application.getAll(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente los application',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener los application',
        details: err.message,
      },
    );
  });
};
