if(Meteor.isClient) {

  Template.searchbar.events({
      'keyup #searchbar [type=text]': function(event, template) {
        // Mimic a search
        $('#spinner').removeClass('hidden'); // Show the spinner icon
        
        //show searchresults
        Session.set('willShowSearchResults',true);
        //show autosuggestion
        Session.set('willShowAutoSuggestion',true);
        
        window.setTimeout(function() { // Remove spinner icon after a while
          $('#spinner').addClass('hidden')
        }, 1500);
      },
      'blur input':function(event,template) {
          //Only handle the blur event if not clicked on the searchbutton
          if(!(event.relatedTarget && $(event.relatedTarget).hasClass('activate-searchbar'))) {
              if($(event.target).val()=="") {
                  //hide if blur without any input
                  $('#searchbar').toggleClass('active');
              }
                // Allow for a potential click to be registered in autosuggestionresult template before hiding
                window.setTimeout(function() { 
                    Session.set('willShowAutoSuggestion',false);
                }, 100);
          }

      },
      'focus input':function(event,template) {
          //will be used to show autosuggestion when user refocus on input
          Session.set('willShowAutoSuggestion',true);
      }
  });

}
