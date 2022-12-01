/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.contact.get(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente el contacto',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener el contacto',
        details: err.message,
      },
    );
  });
};
