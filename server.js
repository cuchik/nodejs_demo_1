var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes/index');
var crud = require('./api/crud');
var app = express();

app.set('port', (process.env.PORT || 5000));

function renderF(req, res) {
	res.sendFile(path.join(__dirname, '/', 'public', 'index.html'));
}
// use public is dirname
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(crud);
app.get('*', renderF);

var server = app.listen(app.get('port'), function() {
	var host = server.address().address
	var port = server.address().port
	console.log("Run at http://%s:%s", host, port)
})