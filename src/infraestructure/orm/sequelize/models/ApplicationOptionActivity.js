module.exports = (sequelize, DataTypes) => sequelize.define('ApplicationOptionActivity', {
  ApplicationId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  OptionId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  ActivityId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  Action: {
    type: DataTypes.STRING,
  },
  Controller: {
    type: DataTypes.STRING,
  },
  ShowInSidebar: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  IsInitialActivity: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Area: {
    type: DataTypes.STRING,
  },
  AllowAssignPermission: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'tbApplicationOptionActivity',
  schema: 'def',
});
