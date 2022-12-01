/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.roleApplicationOptionActivity.remove(params).then((res) => {
    console.info(
      {
        message: 'Se removio el roleApplicationOptionActivity',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al remover el roleApplicationOptionActivity',
        details: err.message,
      },
    );
  });
};
