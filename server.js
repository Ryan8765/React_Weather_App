var express = require('express');


// create our append
var app = express();

const PORT = process.env.PORT || 3000; 

app.use(function (req, res, next) {
	if(req.headers['x-forwarded-proto'] === 'http') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));



app.listen(PORT, function() {
	console.log("Express is up on " + PORT);
});