/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.userRole.getAll(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente los usuarios con rol',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener los usuarios con rol',
        details: err.message,
      },
    );
  });
};
