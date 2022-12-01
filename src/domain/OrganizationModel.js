module.exports = class {
  constructor(
    {
      OrganizationId,
      Name,
      Major,
      State,
      UserInsert,
      DateInsert,
      UserUpdate,
      DateUpdate,
    },
  ) {
    this.OrganizationId = OrganizationId;
    this.Name = Name;
    this.Major = Major;
    this.State = State;
    this.UserInsert = UserInsert;
    this.DateInsert = DateInsert;
    this.UserUpdate = UserUpdate;
    this.DateUpdate = DateUpdate;
  }
};
