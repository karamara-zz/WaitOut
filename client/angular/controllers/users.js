waitOutModule.controller('userController',['userFactory', function(userFactory){
  console.log("user controller loaded")
  this.loggingIn = false;
  _this = this;
  //login
  this.login = function(){
  	console.log("login button clicked")
  	this.loggingIn = true;
  	console.log(this, _this)
  }
}])