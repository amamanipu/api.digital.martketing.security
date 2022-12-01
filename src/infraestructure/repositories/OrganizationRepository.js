const Organization = require('../../domain/OrganizationModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Organization
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.Organization;

    const seqOrganizations = await model.findAll(
      {
        where: params,
      },
    );

    if (seqOrganizations === null) {
      return null;
    }

    return seqOrganizations.map((seqOrganization) => new Organization(seqOrganization.dataValues));
  };

  /**
   * Get Organization
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.Organization;

    const seqOrganization = await model.findOne(
      {
        where: params,
      },
    );

    if (seqOrganization === null) {
      return null;
    }

    return new Organization(seqOrganization.dataValues);
  };

  /**
   * Create Organization
   * @param {any} organizationEntity
   * @returns
   */
  const create = async (organizationEntity) => {
    const { models } = await getConnection();
    const model = models.Organization;
    const seqOrganization = await model.create(organizationEntity);
    await seqOrganization.save();
    return new Organization(seqOrganization.dataValues);
  };

  /**
   * Update Organization
   * @param {any} organizationEntity
   * @param {any} params
   * @returns
   */
  const update = async (organizationEntity, params) => {
    const { models } = await getConnection();
    const model = models.Organization;
    const seqOrganization = await model.update(organizationEntity,
      { where: params })
      .then(() => get(params));

    return new Organization(seqOrganization);
  };

  return {
    getAll,
    get,
    create,
    update,
  };
};

module.exports = { register };
