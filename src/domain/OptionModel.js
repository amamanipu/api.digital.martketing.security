module.exports = class {
  constructor(
    {
      ApplicationId,
      OptionId,
      Name,
      IconClass,
      Position,
      State,
      Type,
      ParentOptionId,
      ActivityId,
      Action,
      Controller,
      Area,
    },
  ) {
    this.ApplicationId = ApplicationId;
    this.OptionId = OptionId;
    this.Name = Name;
    this.IconClass = IconClass;
    this.Position = Position;
    this.State = State;
    this.Type = Type;
    this.ParentOptionId = ParentOptionId;
    this.ActivityId = ActivityId;
    this.Action = Action;
    this.Controller = Controller;
    this.Area = Area;
  }
};
