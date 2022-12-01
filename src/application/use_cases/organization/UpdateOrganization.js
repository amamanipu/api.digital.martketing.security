/* eslint-disable no-console */
module.exports = async (server, organizationEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.organization.update(organizationEntity, params).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente la organizacion',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar la organizacion',
        details: err.message,
      },
    );
  });
};
