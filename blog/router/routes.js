FlowRouter.route("/blog", {
  action: function (params, queryParams) {
    BlazeLayout.render("mainLayout", {main: "allPosts"});
  }
});

// need to use the parameter to show the post
FlowRouter.route("/blog/:slug", {
  action: function (params, queryParams) {
    BlazeLayout.render("mainLayout", {main: "allPosts"});
  }
});

