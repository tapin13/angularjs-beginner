const app = angular.module("App", [ "ngRoute" ]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true });

    $routeProvider.when("/view1", {
        templateUrl: "views/view1.html" 
    });

    $routeProvider.when("/view2", {
        templateUrl: "views/view2.html"
    });

    $routeProvider.otherwise({
        templateUrl: "views/view1.html"
    });
});

app.controller("myCtrl", function($scope, $location) {
    $scope.toToView1 = function() {
        $location.path("/view1");
    }

    $scope.toToView2 = function() {
        $location.path("/view2");
    }
});