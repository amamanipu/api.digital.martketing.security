module.exports = (sequelize, DataTypes) => sequelize.define('Role', {
  RoleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  OrganizationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IsDefault: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  State: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  IsPrivate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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
  tableName: 'tbRole',
  schema: 'sec',
});
