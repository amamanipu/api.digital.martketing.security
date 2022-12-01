/* eslint-disable no-console */
module.exports = async (server, userRoleEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.userRole.update(userRoleEntity, params).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente el usuario con el rol',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar el usuario con el rol',
        details: err.message,
      },
    );
  });
};
