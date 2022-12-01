const Option = require('../../domain/OptionModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Role
   * @param {any} params
   * @returns
   */
  const getAllOptionRole = async (params) => {
    const { models } = await getConnection();
    const model = models.OptionRole;

    const seqOptionsUser = await model.findAll(
      {
        where: params,
      },
    );

    if (seqOptionsUser === null) {
      return null;
    }

    return seqOptionsUser.map((seqOptionUser) => new Option(seqOptionUser));
  };

  /**
   * Get Option Menu
   * @param {any} params
   * @returns
   */
  const getAllOptionUser = async (params) => {
    const { models } = await getConnection();
    const model = models.OptionUser;

    const seqOptionsRole = await model.findAll(
      {
        where: params,
      },
    );

    if (seqOptionsRole === null) {
      return null;
    }

    return seqOptionsRole.map((seqOptionRole) => new Option(seqOptionRole));
  };

  return {
    getAllOptionRole,
    getAllOptionUser,
  };
};

module.exports = { register };
