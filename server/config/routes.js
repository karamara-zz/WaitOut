var user = require('../controllers/users.js')
var direction = require('../controllers/directions.js')
var counter = require('../controllers/counters.js')
module.exports = function(app){

	app.post('/direction', function(req,res){
		direction.getDirection(req,res)
	})

	// routes for counting how many times the request has been made.
	app.put('/counter', function(req, res){
		counter.visit(req,res);
	})
	app.get('/counter', function(req, res){
		counter.show(req, res);
	})
}