module.exports = class {
  constructor(
    {
      UserId,
      LogonName,
      Password,
      State,
      IsPrivate,
      OrganizationId,
      UserInsert,
      DateInsert,
      UserUpdate,
      DateUpdate,
      Contact,
      Role,
    },
  ) {
    this.UserId = UserId;
    this.LogonName = LogonName;
    this.Password = Password;
    this.State = State;
    this.IsPrivate = IsPrivate;
    this.OrganizationId = OrganizationId;
    this.UserInsert = UserInsert;
    this.DateInsert = DateInsert;
    this.UserUpdate = UserUpdate;
    this.DateUpdate = DateUpdate;
    this.Contact = Contact;
    this.Role = Role;
  }
};
