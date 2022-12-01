const Contact = require('../../domain/ContactModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Contact
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.Contact;

    const seqContacts = await model.findAll(
      {
        where: params,
      },
    );

    if (seqContacts === null) {
      return null;
    }

    return seqContacts.map((seqContact) => new Contact(seqContact.dataValues));
  };

  /**
   * Get Contact
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.Contact;

    const seqContact = await model.findOne(
      {
        where: params,
      },
    );

    if (seqContact === null) {
      return null;
    }

    return new Contact(seqContact.dataValues);
  };

  /**
   * Create Contact
   * @param {any} contactEntity
   * @returns
   */
  const create = async (contactEntity) => {
    const { models } = await getConnection();
    const model = models.Contact;
    const seqContact = await model.create(contactEntity);
    await seqContact.save();

    return new Contact(seqContact.dataValues);
  };

  /**
   * Update Contact
   * @param {any} contactEntity
   * @param {any} params
   * @returns
   */
  const update = async (contactEntity, params) => {
    const { models } = await getConnection();
    const model = models.Contact;
    const seqContact = await model.update(contactEntity,
      { where: params })
      .then(() => get(params));

    return new Contact(seqContact);
  };

  return {
    getAll,
    get,
    create,
    update,
  };
};

module.exports = { register };
