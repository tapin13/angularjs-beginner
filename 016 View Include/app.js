const app = angular.module("App", []);

app.controller("Ctrl", function($scope) {
    $scope.items = [
        { "model": "Honda", "cid": 123 },
        { "model": "Mazda", "cid": 456 },
        { "model": "Suzuki", "cid": 789 },
    ];

    $scope.url = "table.html";
})