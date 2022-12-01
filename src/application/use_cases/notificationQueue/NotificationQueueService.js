/* eslint-disable no-console */
const CreateNotificationQueue = require('./CreateNotificationQueue');

const create = async (server, notificationQueue) => {
  try {
    return CreateNotificationQueue(server, notificationQueue);
  } catch (error) {
    console.error(
      {
        message: 'Error service create notification queue',
        details: error.message,
      },
    );
    return null;
  }
};

module.exports = {
  create,
};
