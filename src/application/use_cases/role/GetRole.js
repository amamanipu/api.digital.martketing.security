/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.role.get(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente el rol',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener el rol',
        details: err.message,
      },
    );
  });
};
