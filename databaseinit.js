var MongoClient = require('mongodb').MongoClient;
//assert for testing purposes. May not be necessary
var assert = require('assert');

//##create User Database and functions for querying, adding, and deleting users

module.exports = function(app){//Initialize MongoDatabase
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  
  console.log("Connected correctly to server.");
  db.close();
});
}

//Create function for adding users

//Create function for querying for users

//Create function for deleting users (optional)
