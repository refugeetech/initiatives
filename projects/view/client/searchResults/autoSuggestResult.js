Template.autoSuggestProjectResult.events({
    'click.result':function(e) {
        FlowRouter.go(/projects/+this._id);
        //Reset som stuff
        $('#searchbar').toggleClass('active');
        $('#searchbar input').val("");
        Session.set('willShowAutoSuggestion',false);
        Session.set('willShowSearchResults',false);
        ProjectsIndex.getComponentMethods().search("");
    }
});