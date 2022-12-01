module.exports = (sequelize, DataTypes) => sequelize.define('NotificationQueue', {
  IdNotificationQueue: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  IdNotification: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
  },
  WithCopy: {
    type: DataTypes.STRING,
  },
  Body: {
    type: DataTypes.STRING,
  },
  State: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  DateSend: {
    type: DataTypes.DATE,
  },
  UserInsert: {
    type: DataTypes.STRING,
    allowNull: false,
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
  tableName: 'tbNotificationQueue',
  schema: 'sec',
});
