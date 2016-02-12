Meteor.methods({
  firstAdmin:function() {
    if(AdminConfig.adminEmails[0]) {
      let userId=false;
      try{userId = Accounts.createUser({email:AdminConfig.adminEmails[0]})}catch(e) {
        console.log("problems with creation");
        console.log(e);
      } 
    }
  }
});