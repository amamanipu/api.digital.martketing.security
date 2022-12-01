/* eslint-disable no-console */
module.exports = async (server, applicationOptionEntity) => {
  const repository = server.plugins.sql.client;
  return repository.applicationOption.create(applicationOptionEntity).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente el applicationOption',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar el applicationOption',
        details: err.message,
      },
    );
  });
};
