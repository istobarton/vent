angular.module('vent', ['ngRoute', 'vent.type', 'vent.auth', 'vent.factory'])

  .controller("MainController", function ($scope){

  })

  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'AuthController'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'AuthController'
      })
      .when('/vent', {
        templateUrl: 'views/type.html',
        controller: 'TypeController'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'AuthController'
      })
      .otherwise({ redirectTo: "/vent" })
  }]);
