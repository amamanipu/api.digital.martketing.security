module.exports = class {
  constructor(
    {
      IdNotificationQueue,
      IdNotification,
      UserId,
      Email,
      WithCopy,
      Body,
      State,
      DateSend,
      UserInsert,
      DateInsert,
      UserUpdate,
      DateUpdate,
    },
  ) {
    this.IdNotificationQueue = IdNotificationQueue;
    this.IdNotification = IdNotification;
    this.UserId = UserId;
    this.Email = Email;
    this.WithCopy = WithCopy;
    this.Body = Body;
    this.State = State;
    this.DateSend = DateSend;
    this.UserInsert = UserInsert;
    this.DateInsert = DateInsert;
    this.UserUpdate = UserUpdate;
    this.DateUpdate = DateUpdate;
  }
};
