var user = require('../controllers/users.js')
var direction = require('../controllers/directions.js')
module.exports = function(app){

	app.post('/direction', function(req,res){
		direction.getDirection(req,res)

	})
}