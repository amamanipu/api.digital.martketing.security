/* eslint-disable no-console */
module.exports = async (server, params, exclude = null) => {
  const repository = server.plugins.sql.client;
  return repository.userRole.get(params, exclude).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente el usuario con el rol',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener el usuario con el rol',
        details: err.message,
      },
    );
  });
};
