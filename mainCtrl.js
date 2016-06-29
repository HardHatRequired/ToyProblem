angular.module('toyProblem').controller("mainCtrl", function($scope, mainService) {

  $scope.test = mainService.getData();

})
