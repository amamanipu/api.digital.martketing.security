module.exports = class {
  constructor(
    {
      ApplicationId,
      OptionId,
      ActivityId,
      Action,
      Controller,
      ShowInSidebar,
      IsInitialActivity,
      Area,
      AllowAssignPermission,
    },
  ) {
    this.ApplicationId = ApplicationId;
    this.OptionId = OptionId;
    this.ActivityId = ActivityId;
    this.Action = Action;
    this.Controller = Controller;
    this.ShowInSidebar = ShowInSidebar;
    this.IsInitialActivity = IsInitialActivity;
    this.Area = Area;
    this.AllowAssignPermission = AllowAssignPermission;
  }
};
