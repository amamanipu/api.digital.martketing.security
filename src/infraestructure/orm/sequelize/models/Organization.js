module.exports = (sequelize, DataTypes) => sequelize.define('Organization', {
  OrganizationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Major: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
  },
  IdSector: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  State: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  UserInsert: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'admin',
  },
  DateInsert: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  UserUpdate: {
    type: DataTypes.STRING,
  },
  DateUpdate: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'tbOrganization',
  schema: 'sec',
});
