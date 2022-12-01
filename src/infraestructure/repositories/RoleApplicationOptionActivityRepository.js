const RoleApplicationOptionActivity = require('../../domain/RoleApplicationOptionActivityModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Role Application Option Activity
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.RoleApplicationOptionActivity;

    const seqRoleApplicationOptionActivitys = await model.findAll(
      {
        where: params,
      },
    );

    if (seqRoleApplicationOptionActivitys === null) {
      return null;
    }

    return seqRoleApplicationOptionActivitys.map((
      seqRoleApplicationOptionActivity,
    ) => new RoleApplicationOptionActivity(
      seqRoleApplicationOptionActivity.dataValues,
    ));
  };

  /**
   * Get Role Application Option Activity
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.RoleApplicationOptionActivity;

    const seqRoleApplicationOptionActivity = await model.findOne(
      {
        where: params,
      },
    );

    if (seqRoleApplicationOptionActivity === null) {
      return null;
    }

    return new RoleApplicationOptionActivity(seqRoleApplicationOptionActivity.dataValues);
  };

  /**
   * Create Role Application Option Activity
   * @param {any} roleApplicationOptionActivityEntity
   * @returns
   */
  const create = async (roleApplicationOptionActivityEntity) => {
    const { models } = await getConnection();
    const model = models.RoleApplicationOptionActivity;
    const seqRoleApplicationOptionActivity = await model.create(
      roleApplicationOptionActivityEntity,
    );
    await seqRoleApplicationOptionActivity.save();

    return new RoleApplicationOptionActivity(seqRoleApplicationOptionActivity.dataValues);
  };

  /**
   * Update Role Application Option Activity
   * @param {any} roleApplicationOptionActivityEntity
   * @param {any} params
   * @returns
   */
  const update = async (roleApplicationOptionActivityEntity, params) => {
    const { models } = await getConnection();
    const model = models.RoleApplicationOptionActivity;
    const seqRoleApplicationOptionActivity = await model.update(roleApplicationOptionActivityEntity,
      { where: params })
      .then(() => get(params));

    return new RoleApplicationOptionActivity(seqRoleApplicationOptionActivity);
  };

  /**
   * Delete Role Application Option Activity
   * @param {any} params
   * @returns
   */
  const remove = async (params) => {
    const { models } = await getConnection();
    const model = models.RoleApplicationOptionActivity;
    const seqRoleApplicationOptionActivitys = await model.findAll(
      {
        where: params,
      },
    );

    if (seqRoleApplicationOptionActivitys) {
      seqRoleApplicationOptionActivitys.forEach((
        seqRoleApplicationOptionActivity,
      ) => seqRoleApplicationOptionActivity.destroy());

      return true;
    }

    return false;
  };

  return {
    getAll,
    get,
    create,
    update,
    remove,
  };
};

module.exports = { register };
