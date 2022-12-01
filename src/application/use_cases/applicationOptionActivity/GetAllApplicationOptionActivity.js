/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.applicationOptionActivity.getAll(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente los applicationOptionActivity',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener los applicationOptionActivity',
        details: err.message,
      },
    );
  });
};
