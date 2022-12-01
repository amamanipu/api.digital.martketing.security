module.exports = (sequelize, DataTypes) => sequelize.define('UserRole', {
  UserRoleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  RoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'tbUserRole',
  schema: 'sec',
});
