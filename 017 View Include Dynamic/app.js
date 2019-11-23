const app = angular.module("App", []);

app.controller("Ctrl", function($scope) {
    $scope.items = [
        { "model": "Honda", "cid": 123 },
        { "model": "Mazda", "cid": 456 },
        { "model": "Suzuki", "cid": 789 },
    ];

    $scope.tableView = "table.html";
    $scope.listView = "list.html";

    $scope.url = $scope.tableView;

    $scope.tableViewOn = function() {
        $scope.url = $scope.tableView;
    }
    $scope.listViewOn = function() {
        $scope.url = $scope.listView;
    }
})