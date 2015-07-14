angular.module('vent.type', [])

.controller('TypeController', function ($scope) {
  $scope.type = {};

  $scope.getData = function(type, $location){
    console.log($scope.type.rant);
    $scope.type.rant = "";
    // .then(function(){
    //   $location.path('/')
    // })
    // .catch(function(error){
    //   console.log(error)
    // });
  }
})

.controller('AuthController', function ($scope, $window, $location) {
  $scope.user = {};
});

