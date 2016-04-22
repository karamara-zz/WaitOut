var mongoose = require('mongoose');
var DirectionSchema = new mongoose.Schema({
	_trip: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Trip",
		required: true,
	},
	start_address: String,
	start_location: {
		lat: Number,
		lng: Number
	},
	end_address: String,
	end_location : {
		lat: Number,
		lng: Number
	},
	duration_in_traffic: {
		text:String,
		value:Number
	},
},
{
	timestamps: true
}
)
var Direction = mongoose.model("Direction", DirectionSchema);