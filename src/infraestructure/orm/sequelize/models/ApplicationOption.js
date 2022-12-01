module.exports = (sequelize, DataTypes) => sequelize.define('ApplicationOption', {
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
  ShowActivitiesInSideBar: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
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
  LayoutPosition: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
}, {
  tableName: 'tbApplicationOption',
  schema: 'def',
});
