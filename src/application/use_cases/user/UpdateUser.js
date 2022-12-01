/* eslint-disable no-console */
module.exports = async (server, userEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.user.update(userEntity, params).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente el usuario',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar el usuario',
        details: err.message,
      },
    );
  });
};
