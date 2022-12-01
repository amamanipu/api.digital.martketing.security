module.exports = (sequelize, DataTypes) => sequelize.define('Application', {
  ApplicationId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  State: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'tbApplication',
  schema: 'def',
});
