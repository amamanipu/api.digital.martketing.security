/* eslint-disable no-console */
module.exports = async (server, organizationEntity) => {
  const repository = server.plugins.sql.client;
  return repository.organization.create(organizationEntity).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente la organizacion',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar la organizacion',
        details: err.message,
      },
    );
  });
};
