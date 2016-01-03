
Projects = new Mongo.Collection('projects'); // This is a duplicate of the creaton
                                             // in collection.js, but it does not work without it.

// First page, basic information
Schemas.basicInformation = new SimpleSchema({

  name: {
    type: String,
    label: "Project Name"
  },
  description: {
    type: String,
    label: "Project Description (maximum 500 characters)",
    max: 500
  },
  shortDescription: {
    type: String,
    label: "Project Short (maximum 140 characters)",
    max: 140
  },

  problemCategories: {
  type: [String],
  label: "Problem Categories",
  allowedValues: ['social', 'bureaucracy', 'housing', 'education',
                  'language', 'employment', 'coordination'],
  autoform: {
    options: [
      {label: "Social", value: "social"},
      {label: "Bureaucracy", value: "bureaucracy"},
      {label: "Housing", value: "housing"},
      {label: "Education", value: "education"},
      {label: "Language", value: "language"},
      {label: "Employment", value: "employment"},
      {label: "Coordination", value: "coordination"}
    ]
  }
}
});

// Next page, detailed information
Schemas.detailedInformation = new SimpleSchema({
  tags: {
    type: [String],
    label: "Tags"
  },

  currentStage: {
     type: String,
     allowedValues: [
        'initiation',
        'planning',
        'implementationExecution',
        'operationMonitoring',
        'closing'
     ],
     optional: true,
     label: "Select current project stage",
     autoform: {
        options: [
           {label: "Initiation", value: "initiation"},
           {label: "Planning", value: "planning"},
           {label: "Implementation / Execution", value: "implementationExecution"},
           {label: "Operation / Monitoring", value: "operationMonitoring"},
           {label: "Closing", value: "closing"}
       ]
     }
   },

   targetPlatforms: {
     type: [String],
     label: "Target Platforms",
     allowedValues: ['web', 'ios', 'android', 'windows-phone'],
     autoform: {
       options: [
         {label: "Web", value: "web"},
         {label: "iOS", value: "ios"},
         {label: "Android", value: "android"},
         {label: "Windows Phone", value: "windows-phone"}
       ]
     }
  }
});

Schemas.contactInformation = new SimpleSchema({
  contactname: {
    type: String,
    label: "Contact Name"
  }

//TO DO, get Objects to work!

  // postalAddress: {
  //   type: Object,
  //   label: "Postal Address"
  // },
  // postalAddress.city: {
  //   type:String,
  //   label:"City"
  // },
  // postalAddress.country:{
  //   type:String,
  //   label:"Country"
  // },

  // links: {
  //    type: [Object],
  //    label: "Links"
  // },
  // links.$.name:{
  //   type: String,
  //   label: "Name"
  // },
  // links.$.url:{
  //   type: String,
  //   label: "URL",
  //   regEx: SimpleSchema.RegEx.Url
  // },
  // links.$.type: {
  //   type:String,
  //   label: "Type of URL",
  //   allowedValues: ['web', 'article','blog','facebook', 'twitter', 'instagram', 'blogger','linkedin','other','appStore','googlePlay','windowsStore'],
  //   autoform: {
  //     options: [
  //       //generic link types
  //       {label: "Web", value: "web"},
  //       {label: "Article", value: "article"},
  //       {label: 'Blog', value:"blog"},
  //       {label: "Other", value:"other"},
  //       //appstores
  //       {label: 'App Store', value:"appStore"},
  //       {label: 'Google Play', value:"googlePlay"},
  //       {label: 'Windows Store', value:"windowsStore"},
  //       //social media types
  //       {label: "Blogger", value: "blogger"},
  //       {label: "Facebook", value: "facebook"},
  //       {label: "Twitter", value: "twitter"},
  //       {label: "Instagram", value: "instagram"},
  //       {label: "Linkedin", value: "linkedin"}
  //     ]
  //   }
  // }
  // dateListed: {
  //   type: Date,
  //   label: "Date Listed",
  //   autoValue: function () {
  //     if (this.isInsert) {
  //       return new Date();
  //     } else if (this.isUpsert) {
  //       return {$setOnInsert: new Date()};
  //     } else {
  //       this.unset();  // Prevent user from supplying their own value
  //     }
  //   }
  // },
  //   autoValue: function() {
  //     if (this.isSet && this.value !== true) {
  //       this.unset();
  //     }
  //   }
});

// Attaches schemas to MongoDB collection.
Projects.attachSchema([
  Schemas.basicInformation,
  Schemas.detailedInformation,
  Schemas.contactInformation
]);

// Defines the wizard steps and handles Submittion logic
Template.addProject.helpers({
  steps: function() {
    return [{
      id: 'basic-information',
      title: 'Project information',
      schema: Schemas.basicInformation
    }, {
      id: 'detailed-information',
      title: 'Detailed project information',
      schema: Schemas.detailedInformation
    }, {
      id: 'contact-information',
      title: 'Contact information',
      schema: Schemas.contactInformation,
      onSubmit: function(data, wizard) {
        var self = this;
        Projects.insert(_.extend(wizard.mergedData(), data), function(err, id) {
          if (err) {
            self.done();
          } else {
          FlowRouter.go('/projects/orders/' + id) //should be viewProject
          }
        });
      }
    }];
  }
});

// viewOrder is a leftover from the example, should be viewProject
Template.viewOrder.helpers({
  name: function() {
    return Projects.findOne(FlowRouter.current().params._id).name
  }
})

Wizard.useRouter('kadira:flow-router');
