angular.module('vent', ['ngRoute', 'vent.type'])

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
        templateUrl: 'type.html',
        controller: 'TypeController'
      })
      .when('/logout', {
        templateUrl: 'logout.html',
        controller: 'AuthController'
      })
      .otherwise({ redirectTo: "/vent" })
  }]);
