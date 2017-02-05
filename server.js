var express = require('express');


// create our append
var app = express();



app.use(express.static('public'));


app.listen(3000, function() {
	console.log("Express is up on 3000");
});