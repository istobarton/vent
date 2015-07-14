var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User = mongoose.model('User', userSchema);

var userSchema = new mongoose.Schema({
  username: {

  },

  password: {

  },
  salt: {

  }
})

userSchema.methods.passwordCheck = function(potentialPass) {
  //Use bcrypt to verify password
}

//.validate runs 'pre' .save
userSchema.validate(function(err){
  if(err) handleError(err);
  // else 
  //Use bcrypt to generate salt and hash
})