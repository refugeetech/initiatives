Template.singleProject.helpers({
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
	}
});

Template.singleProject.events({
   'click .projectRoute':function(event,template) {
        //cath click event on link to project to reset some stuff before routing (this should really be done using the router methods because we dont want the searchbar to keep its state whenever a route has occured)
        $('#searchbar').removeClass('active');
        $('#searchbar input').val("");
        Session.set('willShowAutoSuggestion',false);
        Session.set('willShowSearchResults',false);
        ProjectsIndex.getComponentMethods().search("");
   } 
});