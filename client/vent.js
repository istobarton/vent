angular.module('vent', ['ngRoute', 'vent.controllers'])

  .controller("MainController", function ($scope){

  })

  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/signin', {
        templateUrl: 'signin.html',
        controller: 'AuthController'
      })
      .when('/signup', {
        templateUrl: 'signup.html',
        controller: 'AuthController'
      })
      .when('/vent', {
        templateUrl: 'vent.html',
        controller: 'TypeController'
      })
      .when('/logout', {
        templateUrl: 'logout.html',
        controller: 'AuthController'
      })
      .otherwise({ redirectTo: "/vent" })
  }]);
