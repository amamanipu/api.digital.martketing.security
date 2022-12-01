/* eslint-disable no-console */
module.exports = async (server, roleEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.role.update(roleEntity, params).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente el rol',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar el rol',
        details: err.message,
      },
    );
  });
};
