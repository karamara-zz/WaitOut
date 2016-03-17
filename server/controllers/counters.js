var mongoose = require('mongoose');
var Counter = mongoose.model("Counter")
module.exports = (function(){
	return {
		visit: function(req, res){
			console.log("someone visited")
			var newTime = new Date()
			var day = new Date(newTime.getFullYear(), newTime.getMonth(), newTime.getDate())
			Counter.findOne({date:day}, function(err, counter){
				if (err){
					console.log("there was error");
				} else if (counter) {
					counter.counter++;
				} else {
					var counter = new Counter({
						counter: 1,
						date: day
					});
				}
				console.log(counter)
				counter.save(function(err){
					if (err){
						console.log("there was err", err)
					}
					else {
						console.log("success");
					}
				})
			})
		},
		show: function(req, res){
			Counter.find({}, function(err, counters){
				if (err){
					console.log('there was error');
				} else {
					console.log(counters);
					res.json(counters);
				}
			})
		}
	}
})()

