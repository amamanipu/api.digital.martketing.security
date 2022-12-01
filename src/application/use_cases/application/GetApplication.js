/* eslint-disable no-console */
module.exports = async (server, params, exclude = null) => {
  const repository = server.plugins.sql.client;
  return repository.application.get(params, exclude).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente el application',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener el application',
        details: err.message,
      },
    );
  });
};
