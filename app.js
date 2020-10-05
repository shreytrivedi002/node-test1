var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();
app.use('/assets', express.static('assets'));



app.get('/', function(req, res) {
    res.send('Hello There@!! How are you Buddy  ');
});
app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/templates/index.html');
});



app.listen(56000);
console.log('server started at port 56000');