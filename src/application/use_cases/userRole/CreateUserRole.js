/* eslint-disable no-console */
module.exports = async (server, userRoleEntity) => {
  const repository = server.plugins.sql.client;
  return repository.userRole.create(userRoleEntity).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente el usuario con el rol',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar el usuario con el rol',
        details: err.message,
      },
    );
  });
};
