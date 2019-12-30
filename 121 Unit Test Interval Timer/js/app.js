const app = angular.module("App", [ ]);

app.controller("myCtrl", function($scope, $interval, $timeout) {
    $scope.intervalCounter = 0;
    $scope.timeoutCounter = 0;

    $interval(function() {
        $scope.intervalCounter++;
    }, 5000, 10);

    $timeout(function() {
        $scope.timeoutCounter++;
    }, 5000);
});