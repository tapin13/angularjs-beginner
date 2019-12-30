const app = angular.module("App", [ ]);

app.controller("myCtrl", function($scope, counterService) {
    $scope.items = 0;

    $scope.addItem = function() {
        counterService.increment();

        $scope.items = counterService.getCounter();
    }
});

app.factory("counterService", function() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        getCounter: function() {
            return counter;
        }
    }
})