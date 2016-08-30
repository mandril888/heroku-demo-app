var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function (req,res) {
	res.send("Welcome to my app");
})

app.listen(3000, function() {
	console.log("Listening on port " + PORT)
});