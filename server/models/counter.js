var mongoose = require('mongoose');
var CounterSchema = new mongoose.Schema({
	counter: Number,
	date: Date
})
var Counter = mongoose.model("Counter", CounterSchema);