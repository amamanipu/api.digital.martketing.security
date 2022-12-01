const User = require('../../domain/UserModel');

const register = async ({ getConnection }) => {
  /**
   * Get All User
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.User;

    models.Contact.hasOne(model, {
      sourceKey: 'ContactId',
      foreignKey: 'UserId',
    });

    model.belongsTo(models.Contact, {
      sourceKey: 'ContactId',
      foreignKey: 'UserId',
    });

    models.Role.hasOne(model, {
      sourceKey: 'RoleId',
      foreignKey: 'RoleId',
    });

    model.belongsTo(models.Role, {
      sourceKey: 'RoleId',
      foreignKey: 'RoleId',
    });

    const seqUsers = await model.findAll(
      {
        where: params,
        include: [
          {
            model: models.Contact,
            required: true,
            attributes: [
              'Names',
              'LastNames',
              'Email',
              'PhoneNumber',
              'RegisterDate',
              'Photo',
            ],
          },
          {
            model: models.Role,
            required: true,
            attributes: [
              'RoleId',
              'Name',
            ],
          },
        ],
        attributes: {
          exclude: [
            'Password',
            'OrganizationId',
            'IsPrivate',
          ],
        },
      },
    );

    if (seqUsers === null) {
      return null;
    }

    return seqUsers.map((seqUser) => new User(seqUser));
  };

  /**
   * Get User
   * @param {any} params
   * @returns
   */
  const get = async (params, exclude = null) => {
    const { models } = await getConnection();
    const model = models.User;

    models.Contact.hasOne(model, {
      sourceKey: 'ContactId',
      foreignKey: 'UserId',
    });

    model.belongsTo(models.Contact, {
      sourceKey: 'ContactId',
      foreignKey: 'UserId',
    });

    models.Role.hasOne(model, {
      sourceKey: 'RoleId',
      foreignKey: 'RoleId',
    });

    model.belongsTo(models.Role, {
      sourceKey: 'RoleId',
      foreignKey: 'RoleId',
    });

    const seqUser = await model.findOne(
      {
        where: params,
        include: [
          {
            model: models.Contact,
            required: true,
            attributes: [
              'Names',
              'LastNames',
              'Email',
              'PhoneNumber',
              'RegisterDate',
              'Photo',
            ],
          },
          {
            model: models.Role,
            required: true,
            attributes: [
              'RoleId',
              'Name',
            ],
          },
        ],
        attributes: {
          exclude: (exclude !== null) ? exclude : [
            'Password',
            'IsPrivate',
          ],
        },
      },
    );

    if (seqUser === null) {
      return null;
    }

    return new User(seqUser);
  };

  /**
   * Create User
   * @param {any} userEntity
   * @returns
   */
  const create = async (userEntity) => {
    const { models } = await getConnection();
    const model = models.User;
    const seqUser = await model.create(userEntity);
    await seqUser.save();
    return get(seqUser.UserId);
  };

  /**
   * Update User
   * @param {any} userEntity
   * @param {any} params
   * @returns
   */
  const update = async (userEntity, params) => {
    const { models } = await getConnection();
    const model = models.User;
    const seqUser = await model.update(userEntity,
      { where: params })
      .then(() => get(params));

    return new User(seqUser);
  };

  return {
    getAll,
    get,
    create,
    update,
  };
};

module.exports = { register };
