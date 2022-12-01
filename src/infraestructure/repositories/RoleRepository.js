const Role = require('../../domain/RoleModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Role
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.Role;

    const seqRoles = await model.findAll(
      {
        where: params,
        attributes: {
          exclude: [
            'IsDefault',
            'IsPrivate',
          ],
        },
      },
    );

    if (seqRoles === null) {
      return null;
    }

    return seqRoles.map((seqRole) => new Role(seqRole.dataValues));
  };

  /**
   * Get Role
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.Role;

    const seqRole = await model.findOne(
      {
        where: params,
        attributes: {
          exclude: [
            'IsDefault',
            'IsPrivate',
          ],
        },
      },
    );

    if (seqRole === null) {
      return null;
    }

    return new Role(seqRole);
  };

  /**
   * Create Role
   * @param {any} roleEntity
   * @returns
   */
  const create = async (roleEntity) => {
    const { models } = await getConnection();
    const model = models.Role;
    const seqRole = await model.create(roleEntity);
    await seqRole.save();
    return new Role(seqRole.dataValues);
  };

  /**
   * Update Role
   * @param {any} roleEntity
   * @param {any} params
   * @returns
   */
  const update = async (roleEntity, params) => {
    const { models } = await getConnection();
    const model = models.Role;
    const seqRole = await model.update(roleEntity,
      { where: params })
      .then(() => get(params));

    return new Role(seqRole);
  };

  return {
    getAll,
    get,
    create,
    update,
  };
};

module.exports = { register };
