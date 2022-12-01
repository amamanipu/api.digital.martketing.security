/* eslint-disable no-console */
module.exports = async (server, roleEntity) => {
  const repository = server.plugins.sql.client;
  return repository.role.create(roleEntity).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente el rol',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar el rol',
        details: err.message,
      },
    );
  });
};
