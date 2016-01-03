FlowRouter.route("/projects", {
  action: function (params) {
    BlazeLayout.render("mainLayout", {main: "viewProjects"});
  }
});

FlowRouter.route("/projects/add", {
  action: function (params) {
    BlazeLayout.render("mainLayout", {main: "addProject"});
  }
});


FlowRouter.route('/projects/add/:step?', {
  name: 'addProject',
  action: function(params, queryParams) {
    if (!params.step) {
      FlowRouter.go('addProject', {step: 'basic-information'})
    } else {
      BlazeLayout.render('mainLayout', {main: 'addProject'})
    }
  },
});

FlowRouter.route('/projects/orders/:_id', {
  action: function(params) {
    BlazeLayout.render('mainLayout', {main: 'viewOrder'})
  }
});
