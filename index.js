var express = require('express')
var app 	= express()
var parser  = require("body-parser")
var http 	= require('http').Server(app)
var port 	= 8080

app.use(parser.urlencoded({ extended: false }))

app.use('/public',express.static(__dirname + '/public'))
app.use('/lib',express.static(__dirname + '/lib'))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
});

http.listen(port, function(err){
	if(err) return console.log(err)
});

console.log('Server start in port: ' + port)