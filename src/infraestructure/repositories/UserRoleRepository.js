const UserRole = require('../../domain/UserRoleModel');

const register = async ({ getConnection }) => {
  /**
   * Get All User Role
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.UserRole;

    const seqUserRoles = await model.findAll(
      {
        where: params,
      },
    );

    if (seqUserRoles === null) {
      return null;
    }

    return seqUserRoles.map((seqUserRole) => new UserRole(seqUserRole.dataValues));
  };

  /**
   * Get User Role
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.UserRole;

    const seqUserRole = await model.findOne(
      {
        where: params,
      },
    );

    if (seqUserRole === null) {
      return null;
    }

    return new UserRole(seqUserRole.dataValues);
  };

  /**
   * Create User Role
   * @param {any} userRoleEntity
   * @returns
   */
  const create = async (userRoleEntity) => {
    const { models } = await getConnection();
    const model = models.UserRole;
    const seqUserRole = await model.create(userRoleEntity);
    await seqUserRole.save();

    return new UserRole(seqUserRole.dataValues);
  };

  /**
   * Update User Role
   * @param {any} userRoleEntity
   * @param {any} params
   * @returns
   */
  const update = async (userRoleEntity, params) => {
    const { models } = await getConnection();
    const model = models.UserRole;
    const seqUserRole = await model.update(userRoleEntity,
      { where: params })
      .then(() => get(params));

    return new UserRole(seqUserRole);
  };

  return {
    getAll,
    get,
    create,
    update,
  };
};

module.exports = { register };
