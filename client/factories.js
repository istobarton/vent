angular.module('vent.factory', [])

.factory('Auth', function ($http, $window, $location){
  var signIn = function(user){
    console.log("user", user);
  }

  var signUp = function(user){

  }

  var signOut = function(){

  }

  var isAuth = function(){

  }

  return {
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    isAuth: isAuth
  }
})

  var signin = function (user) {
    console.log("user", user);
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };