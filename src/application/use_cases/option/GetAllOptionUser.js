/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.option.getAllOptionUser(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente las opciones de menu asociados al usuario',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener las opciones de menu asociados al usuario',
        details: err.message,
      },
    );
  });
};
