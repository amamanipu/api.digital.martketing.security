const Application = require('../../domain/ApplicationModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Application
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.Application;

    const seqApplications = await model.findAll(
      {
        where: params,
      },
    );

    if (seqApplications === null) {
      return null;
    }

    return seqApplications.map((seqApplication) => new Application(seqApplication.dataValues));
  };

  /**
   * Get Application
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.Application;

    const seqApplication = await model.findOne(
      {
        where: params,
      },
    );

    if (seqApplication === null) {
      return null;
    }

    return new Application(seqApplication.dataValues);
  };

  /**
   * Create Application
   * @param {any} applicationEntity
   * @returns
   */
  const create = async (applicationEntity) => {
    const { models } = await getConnection();
    const model = models.Application;
    const seqApplication = await model.create(applicationEntity);
    await seqApplication.save();

    return new Application(seqApplication.dataValues);
  };

  /**
   * Update Application
   * @param {any} applicationEntity
   * @param {any} params
   * @returns
   */
  const update = async (applicationEntity, params) => {
    const { models } = await getConnection();
    const model = models.Application;
    const seqApplication = await model.update(applicationEntity,
      { where: params })
      .then(() => get(params));

    return new Application(seqApplication);
  };

  return {
    getAll,
    get,
    create,
    update,
  };
};

module.exports = { register };
