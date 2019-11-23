const app = angular.module("App", []);

app.controller("Ctrl", function($scope) {
    $scope.items = [
        { "model": "Honda", "cid": 123 },
        { "model": "Mazda", "cid": 456 },
        { "model": "Suzuki", "cid": 789 },
    ];

    $scope.options = [
        { display: "Table", value: "table" },
        { display: "List", value: "list" },
        { display: "List with badges", value: "badges" },
    ];

    $scope.mode = $scope.options[0];


})