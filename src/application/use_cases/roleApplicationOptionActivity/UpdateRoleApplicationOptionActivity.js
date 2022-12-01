/* eslint-disable no-console */
module.exports = async (server, roleApplicationOptionActivityEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.roleApplicationOptionActivity.update(
    roleApplicationOptionActivityEntity, params,
  ).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente el roleApplicationOptionActivity',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar el roleApplicationOptionActivity',
        details: err.message,
      },
    );
  });
};
