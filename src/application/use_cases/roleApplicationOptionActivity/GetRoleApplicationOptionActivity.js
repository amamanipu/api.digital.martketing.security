/* eslint-disable no-console */
module.exports = async (server, params, exclude = null) => {
  const repository = server.plugins.sql.client;
  return repository.roleApplicationOptionActivity.get(params, exclude).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente el roleApplicationOptionActivity',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener el roleApplicationOptionActivity',
        details: err.message,
      },
    );
  });
};
