Template.firstAdminButton.events({
  'click':function(e,template) {
    console.log($("#firstAdminEmail").val());
    e.preventDefault();
   Meteor.call("firstAdmin");
  }
});