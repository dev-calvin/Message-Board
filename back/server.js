/*
    Calvin McClure
    Mar 2 2017

    purpose: back end server

    3/3/17 support node server for message board application

    3/6/17 added mongodb

*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var mongo = require('mongodb');
var port = 8080;

var Message = mongoose.model('Message',{
  msg: String
});

app.use(bodyParser.json());

// take care of CORE's errors
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

//impliment an endpoint for message postings
app.get('/api/message', getMessages);

//impliment an endpoint for message postings
app.post('/api/message', function(req, res){
    console.log(req.body);
    var message = new Message(req.body);
    message.save();
    // database.collection('messages').insertOne(req.body);
    res.status(200);
});

function getMessages(req, res) {
  Message.find().exec(function(err, result){
    res.send(result);
  });
}

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/test', function(err,db){
  if(!err){
    console.log('Connected to  MongoDB');
    database = db;
  }
});

// connect to mongoose
// var database = mongoose.connect;

var server = app.listen(port, function (){
    console.log('Server listening on localhost:%s', port);
});
