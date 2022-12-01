module.exports = (sequelize, DataTypes) => sequelize.define('Contact', {
  ContactId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  Names: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastNames: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
  PhoneNumber: {
    type: DataTypes.STRING,
  },
  RegisterDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  Photo: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'tbContact',
  schema: 'gen',
});
