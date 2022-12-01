module.exports = (sequelize, DataTypes) => sequelize.define('RoleApplicationOptionActivity', {
  RoleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
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
}, {
  tableName: 'tbRoleApplicationOptionActivity',
  schema: 'sec',
});
