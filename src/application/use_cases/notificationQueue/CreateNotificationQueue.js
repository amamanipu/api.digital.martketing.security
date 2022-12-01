/* eslint-disable no-console */
module.exports = async (server, notificationQueueEntity) => {
  const repository = server.plugins.sql.client;
  return repository.notificationQueue.create(notificationQueueEntity).then((res) => {
    console.info(
      {
        message: 'Se registro correctamente la notificationQueue',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al registrar la notificationQueue',
        details: err.message,
      },
    );
  });
};
