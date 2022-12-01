/* eslint-disable no-console */
module.exports = async (server, applicationOptionActivityEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.applicationOptionActivity.update(
    applicationOptionActivityEntity, params,
  ).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente el applicationOptionActivity',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar el applicationOptionActivity',
        details: err.message,
      },
    );
  });
};
