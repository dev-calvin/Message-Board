/*
    Calvin McClure
    Mar 2 2017

    purpose: back end server

    3/3/17 support node server for message board application

*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

app.use(bodyParser.json());

// take care of CORE's errors
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

//impliment an endpoint for message postings
app.post('/api/message', function(req, res){
    console.log(req.body);
    res.status(200);
});

var server = app.listen(port, function (){
    console.log('Server listening on localhost:%s', port);
});
