module.exports = class {
  constructor(
    {
      ApplicationId,
      OptionId,
      Name,
      IconClass,
      Position,
      ShowActivitiesInSideBar,
      State,
      Type,
      ParentOptionId,
      LayoutPosition,
    },
  ) {
    this.ApplicationId = ApplicationId;
    this.OptionId = OptionId;
    this.Name = Name;
    this.IconClass = IconClass;
    this.Position = Position;
    this.ShowActivitiesInSideBar = ShowActivitiesInSideBar;
    this.State = State;
    this.Type = Type;
    this.ParentOptionId = ParentOptionId;
    this.LayoutPosition = LayoutPosition;
  }
};
