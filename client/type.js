angular.module('vent.type', [])

.controller('TypeController', function ($scope) {
  $scope.type = {};

  $scope.getData = function(type, $location){
    console.log($scope.type.rant);

  $scope.type.rant = "";
  };

  $scope.num = function(type){
    if($scope.type.rant!==undefined){
      var hold = $scope.type.rant.split(" ").length || 0;
      var sum = 750 - hold;
      $scope.count = " " + sum + " words till calm"
    }
  };
});


