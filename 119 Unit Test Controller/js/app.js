const app = angular.module("App", [ ]);

app.controller("myCtrl", function($scope) {
    $scope.counter = 0;

    $scope.incrementCounter = function() {
        $scope.counter++;
    }
});