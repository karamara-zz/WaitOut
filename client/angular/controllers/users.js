waitOutModule.controller('userController',['userFactory', function(userFactory){
  console.log("user controller loaded")
  this.loggingIn = false;
  _this = this;
  //login
  this.login = function(){
  	console.log("login button clicked")
    if ( this.loggingIn == true){
      this.loggingIn = false;
    } else {
    	this.loggingIn = true;
    }
  }
  this.closeLogin = function(){
  	console.log("closing login")
  	if(this.loggingIn = true){
	  	this.loggingIn = false;
  	}
  }
}])