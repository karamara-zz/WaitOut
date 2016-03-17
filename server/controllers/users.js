var mongoose = require('mongoose');
var User = mongoose.model("User");
module.exports = (function(){
	return {
		create: function(req, res){
			console.log("added")
			var user = new User({name: req.body.name , age: req.body.age});
			user.save(function(err){
				if (err){
					console.log("there was err", err)
				}
				else {
					console.log("success");
				}
			})
		}
	}
})()