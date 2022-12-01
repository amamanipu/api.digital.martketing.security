/* eslint-disable no-console */
module.exports = async (server, applicationOptionActivityEntity) => {
  const repository = server.plugins.sql.client;
  return repository.applicationOptionActivity.create(
    applicationOptionActivityEntity,
  ).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente el applicationOptionActivity',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar el applicationOptionActivity',
        details: err.message,
      },
    );
  });
};
