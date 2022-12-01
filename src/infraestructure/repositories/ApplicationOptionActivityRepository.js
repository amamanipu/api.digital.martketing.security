const ApplicationOptionActivity = require('../../domain/ApplicationOptionActivityModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Application Option Activity
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.ApplicationOptionActivity;

    const seqApplicationOptionActivitys = await model.findAll(
      {
        where: params,
      },
    );

    if (seqApplicationOptionActivitys === null) {
      return null;
    }

    return seqApplicationOptionActivitys.map((
      seqApplicationOptionActivity,
    ) => new ApplicationOptionActivity(
      seqApplicationOptionActivity.dataValues,
    ));
  };

  /**
   * Get Application Option Activity
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.ApplicationOptionActivity;

    const seqApplicationOptionActivity = await model.findOne(
      {
        where: params,
      },
    );

    if (seqApplicationOptionActivity === null) {
      return null;
    }

    return new ApplicationOptionActivity(seqApplicationOptionActivity.dataValues);
  };

  /**
   * Create Application Option Activity
   * @param {any} applicationOptionActivityEntity
   * @returns
   */
  const create = async (applicationOptionActivityEntity) => {
    const { models } = await getConnection();
    const model = models.ApplicationOptionActivity;
    const seqApplicationOptionActivity = await model.create(applicationOptionActivityEntity);
    await seqApplicationOptionActivity.save();

    return new ApplicationOptionActivity(seqApplicationOptionActivity.dataValues);
  };

  /**
   * Update Application Option Activity
   * @param {any} applicationOptionActivityEntity
   * @param {any} params
   * @returns
   */
  const update = async (applicationOptionActivityEntity, params) => {
    const { models } = await getConnection();
    const model = models.ApplicationOptionActivity;
    const seqApplicationOptionActivity = await model.update(applicationOptionActivityEntity,
      { where: params })
      .then(() => get(params));

    return new ApplicationOptionActivity(seqApplicationOptionActivity);
  };

  return {
    getAll,
    get,
    create,
    update,
  };
};

module.exports = { register };
