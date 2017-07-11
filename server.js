var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('Privateroute hit');
		next();
	},
	logger: function (req, res, next){
		var d = new Date().toString();
        console.log('Request: ' + 'Date:  ' + d + ' ' + req.method + ' ' + req.originalUrl);
        next();
	}
};
app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About US!');
});

app.use(express.static(__dirname  + '/public'));

app.listen(PORT, function() {
	console.log('Express Server started on port' + PORT + '!');
});