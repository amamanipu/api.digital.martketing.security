/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.organization.get(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente la organizacion',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener la organizacion',
        details: err.message,
      },
    );
  });
};
