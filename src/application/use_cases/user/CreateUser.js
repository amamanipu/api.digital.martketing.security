/* eslint-disable no-console */
module.exports = async (server, userEntity) => {
  const repository = server.plugins.sql.client;
  return repository.user.create(userEntity).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente el usuario',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar el usuario',
        details: err.message,
      },
    );
  });
};
