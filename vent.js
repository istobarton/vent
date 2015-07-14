angular.module('vent', ['vent.type', 'ngRoute'])

  .controller("MainController", function($scope){

  })

  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'index.html'
        controller: 'typeController'
      })
      .otherwise({ redirectTo: "/signin"})
  }]);

//   .config(['$routeProvider', '$locationProvider',
//     function($routeProvider, $locationProvider) {
//       $locationProvider.html5Mode(true);
//       $routeProvider
//         .when("/contacts", {
//           templateUrl: "partials/index.jade",
//           controller: "ContactsIndexCtrl" })
//         .when("/contacts/new", {
//           templateUrl: "partials/edit.jade",
//           controller: "ContactsEditCtrl" })
//         .when("/contacts/:id", {
//           templateUrl: "partials/show.jade",
//           controller: "ContactsShowCtrl" })
//         .when("/contacts/:id/edit", {
//           templateUrl: "partials/edit.jade",
//           controller: "ContactsEditCtrl" })
//         .otherwise({ redirectTo: "/contacts" });
//     }
//   ]
// );

// phonecatApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/phones', {
//         templateUrl: 'partials/phone-list.html',
//         controller: 'PhoneListCtrl'
//       }).
//       when('/phones/:phoneId', {
//         templateUrl: 'partials/phone-detail.html',
//         controller: 'PhoneDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/phones'
//       });
//   }]);