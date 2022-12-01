module.exports = class {
  constructor(
    {
      RoleId,
      OrganizationId,
      Name,
      IsDefault,
      State,
      IsPrivate,
      UserInsert,
      DateInsert,
      UserUpdate,
      DateUpdate,
    },
  ) {
    this.RoleId = RoleId;
    this.OrganizationId = OrganizationId;
    this.Name = Name;
    this.IsDefault = IsDefault;
    this.State = State;
    this.IsPrivate = IsPrivate;
    this.UserInsert = UserInsert;
    this.DateInsert = DateInsert;
    this.UserUpdate = UserUpdate;
    this.DateUpdate = DateUpdate;
  }
};
