var mongoose = require('mongoose');
var TripSchema = new mongoose.Schema({
	_user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		required: true,
	},
	direcitons: [{
		type: mongoose.Schema.ObjectId,
		ref:"Direction",
	}],
	name: {
		type: String,
		required: true,
	}
})
var Trip = mongoose.model("Trip", TripSchema);