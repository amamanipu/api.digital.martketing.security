module.exports = (sequelize, DataTypes) => sequelize.define('OptionUser', {
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
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IconClass: {
    type: DataTypes.STRING,
  },
  Position: {
    type: DataTypes.SMALLINT,
  },
  State: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Type: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  ParentOptionId: {
    type: DataTypes.STRING,
  },
  ActivityId: {
    type: DataTypes.STRING,
  },
  Action: {
    type: DataTypes.STRING,
  },
  Controller: {
    type: DataTypes.STRING,
  },
  Area: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'vwOptionUser',
  schema: 'dbo',
});
