const NotificationQueue = require('../../domain/NotificationQueueModel');

const register = async ({ getConnection }) => {
  /**
   * Create Notificaction Queue
   * @param {any} notificactionQueueEntity
   * @returns
   */
  const create = async (notificactionQueueEntity) => {
    const { models } = await getConnection();
    const model = models.NotificationQueue;
    const seqNotificationQueue = await model.create(notificactionQueueEntity);
    await seqNotificationQueue.save();

    return new NotificationQueue(seqNotificationQueue);
  };

  return {
    create,
  };
};

module.exports = { register };
