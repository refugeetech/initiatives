Schemas = {};
if (Meteor.isClient) {
Template.registerHelper('Schemas', function() {
  return Schemas;
});
}
