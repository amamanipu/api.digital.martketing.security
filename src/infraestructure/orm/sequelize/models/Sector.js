module.exports = (sequelize, DataTypes) => sequelize.define('Sector', {
  IdSector: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  State: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  tableName: 'tbSector',
  schema: 'sec',
});
