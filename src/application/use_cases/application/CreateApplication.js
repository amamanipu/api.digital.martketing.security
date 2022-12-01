/* eslint-disable no-console */
module.exports = async (server, applicationEntity) => {
  const repository = server.plugins.sql.client;
  return repository.application.create(applicationEntity).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente la application',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar la application',
        details: err.message,
      },
    );
  });
};
