module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  UserId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  LogonName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
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
  OrganizationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  RoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  tableName: 'tbUser',
  schema: 'sec',
});
