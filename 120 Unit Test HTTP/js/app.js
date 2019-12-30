const app = angular.module("App", [ ]);

app.controller("myCtrl", function($scope, $http) {
    $scope.products = [];

    $http.get('productData.json').then(function(response) {
        $scope.products = response.data;
    })
});