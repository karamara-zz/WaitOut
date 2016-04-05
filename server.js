var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname,'bower_components')));
//session set up

var session = require('express-session');
app.use(session({
	secret: 'direction',
	resave: false,
	// resave forces session to be saved back even if no modification done
	saveUninitialized: true
	// forces session taht is new but not modified
}))



// requiring

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)


// runs the server

app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
	console.log("listening the port : 8000");
})
