/* eslint-disable no-console */
module.exports = async (server, roleApplicationOptionActivityEntity) => {
  const repository = server.plugins.sql.client;
  return repository.roleApplicationOptionActivity.create(
    roleApplicationOptionActivityEntity,
  ).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente el roleApplicationOptionActivity',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar el roleApplicationOptionActivity',
        details: err.message,
      },
    );
  });
};
