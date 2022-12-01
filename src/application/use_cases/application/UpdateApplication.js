/* eslint-disable no-console */
module.exports = async (server, applicationEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.application.update(applicationEntity, params).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente el application',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar el application',
        details: err.message,
      },
    );
  });
};
