/* eslint-disable no-console */
module.exports = async (server, applicationOptionEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.applicationOption.update(applicationOptionEntity, params).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente el applicationOption',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar el applicationOption',
        details: err.message,
      },
    );
  });
};
