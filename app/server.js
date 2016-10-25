//imports
var express 	= require('express');
var app 		= express();
var port 	 	= 8080;
var morgan 		= require('morgan');

//configure API
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

app.listen(process.env.NODE_PORT || port, process.env.NODE_IP || 'localhost', function(){
	console.log("listening on " + (process.env.NODE_PORT || port));
});