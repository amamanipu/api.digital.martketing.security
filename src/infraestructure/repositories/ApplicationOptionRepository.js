const ApplicationOption = require('../../domain/ApplicationOptionModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Application Option
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.ApplicationOption;

    const seqApplicationOptions = await model.findAll(
      {
        where: params,
      },
    );

    if (seqApplicationOptions === null) {
      return null;
    }

    return seqApplicationOptions.map(
      (seqApplicationOption) => new ApplicationOption(seqApplicationOption.dataValues),
    );
  };

  /**
   * Get Application Option
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.ApplicationOption;

    const seqApplicationOption = await model.findOne(
      {
        where: params,
      },
    );

    if (seqApplicationOption === null) {
      return null;
    }

    return new ApplicationOption(seqApplicationOption.dataValues);
  };

  /**
   * Create Application Option
   * @param {any} applicationOptionEntity
   * @returns
   */
  const create = async (applicationOptionEntity) => {
    const { models } = await getConnection();
    const model = models.ApplicationOption;
    const seqApplicationOption = await model.create(applicationOptionEntity);
    await seqApplicationOption.save();

    return new ApplicationOption(seqApplicationOption.dataValues);
  };

  /**
   * Update Application Option
   * @param {any} applicationOptionEntity
   * @param {any} params
   * @returns
   */
  const update = async (applicationOptionEntity, params) => {
    const { models } = await getConnection();
    const model = models.ApplicationOption;
    const seqApplicationOption = await model.update(applicationOptionEntity,
      { where: params })
      .then(() => get(params));

    return new ApplicationOption(seqApplicationOption);
  };

  return {
    getAll,
    get,
    create,
    update,
  };
};

module.exports = { register };
