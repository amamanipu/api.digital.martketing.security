/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.organization.getAll(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente las organizaciones',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener las organizaciones',
        details: err.message,
      },
    );
  });
};
