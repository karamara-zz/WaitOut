var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client')));

app.set('views', path.join(__dirname,'client'));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)


// runs the server

app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
	console.log("listening the port : 8000");
})
