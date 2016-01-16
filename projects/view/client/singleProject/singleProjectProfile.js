Template.singleProjectProfile.helpers({
    getProject: function () {
      return Projects.findOne({ _id: FlowRouter.getParam('projectId')});
    },
    typeToClass:function() {
  		if(this.type=='facebook') {
  			return 'fa fa-facebook';
  		}
  		if(this.type=='twitter') {
  			return 'fa fa-twitter';
  		}
  		if(this.type=='instagram') {
  			return 'fa fa-instagram';
  		}
  		//need to implement font awesome icon for blogger and other link types used
  		if(this.type=='blogger') {
  			return 'fa fa-blogger';
  		}
  		if(this.type=='linkedin') {
  			return 'fa fa-linkedin';
  		}
  	},
    startupDateFormatted: function () {
      return moment(this.startupDate).format('YYYY');
    },

    websites: function () {

      var websites = jQuery.grep(this.links, function( n, i ) {
        return ( n.type === 'web' );
      });
      return websites;
    },

    socialLinks: function () {

      var websites = jQuery.grep(this.links, function( n, i ) {
        return ( n.type === 'web' ||
          n.type === 'facebook' ||
          n.type ===  'twitter' ||
          n.type === 'instagram' ||
          n.type === 'blogger' ||
          n.type === 'linkedin'
        );
      });
      return websites;
    },

    hasMultipleWebsites: function () {

      //TODO: Duplicated code, can we reuse instead?
      var websites = jQuery.grep(this.links, function( n, i ) {
        return ( n.type === 'web' );
      });

      return websites.length > 1;
    },
    isWebsite: function () {
      return this.type=='web';
    }
});

Template.singleProjectProfile.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var projectId = FlowRouter.getParam('projectId');
    self.subscribe('singleProject', projectId);
  });
});
