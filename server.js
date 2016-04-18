var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname)));
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


// testing chai
// 
var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
console.log(assert);