/* eslint-disable no-console */
module.exports = async (server, params, exclude = null) => {
  const repository = server.plugins.sql.client;
  return repository.applicationOptionActivity.get(params, exclude).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente el applicationOptionActivity',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener el applicationOptionActivity',
        details: err.message,
      },
    );
  });
};
