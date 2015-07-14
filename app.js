//#### REQUIREMENTS ######//

//Initializes Express to host locally
var express = require('express');
var app = express();

//Initializes MongoDB 
var MongoClient = require('mongodb').MongoClient;
//assert primarly for testing purposes, utilized in canonical set-up of Mongo
var assert = require('assert');
var mongoose = require('mongoose');

//#### SERVER INIT #####
//Prints Timestamp for every request to server (nodemon) 
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

//TODO: Build up Router
app.get('/', function (req, res) {
  console.log(req.params);
  res.send('Hello asdfsdafWorld!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


//#### DATABASE INIT #####
//Initializes connection to 'mongodb://127.0.0.1:27017/test'
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error;'));
db.once('open', function(){
  console.log("Connected correctly to server.");
})


  // MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
  //   if(err) throw err;

  //   var collection = db.collection('test_insert');
  //   collection.insert({a:2}, function(err, docs) {

  //     collection.count(function(err, count) {
  //       console.log(format("count = %s", count));
  //     });

  //     // Locate all the entries using find
  //     collection.find().toArray(function(err, results) {
  //       console.dir(results);
  //       // Let's close the db
  //       db.close();
  //     });
  //   });
  // })