/* eslint-disable no-console */
module.exports = async (server, contactEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.contact.update(contactEntity, params).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente el contacto',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar el contacto',
        details: err.message,
      },
    );
  });
};
