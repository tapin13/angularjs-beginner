const app = angular.module("App", [ "ngResource", "ngRoute" ]);

app.constant("baseUrl", "http://angularjs.local/items/")

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });

    $routeProvider.when("/117 REST Routing/table", {
        templateUrl: "views/table.html" 
    });

    $routeProvider.when("/117 REST Routing/edit", {
        templateUrl: "views/edit.html"
    });

    $routeProvider.when("/117 REST Routing/create", {
        templateUrl: "views/edit.html"
    });

    $routeProvider.otherwise({
        templateUrl: "views/table.html"
    });
});

app.controller("myCtrl", function($scope, $http, $resource, $location, baseUrl) {
    $scope.currentView = 'table';

    $scope.itemsResource = $resource(baseUrl + ":id", { id: "@id" }, { 
        create: { method: 'POST' },
        update: { method: 'PUT' }
    });

    $scope.items = [];

    $scope.refresh = function() {
        $scope.items = $scope.itemsResource.query();
    }

    $scope.edit =  function(item) {
        $scope.currentItem = item ? angular.copy(item): {};
        $location.path('/117 REST Routing/edit');
    }

    $scope.cancel =  function() {
        $location.path('/117 REST Routing/table');
    }

    $scope.save =  function(item) {
        if(angular.isDefined(item.id)) {
            $scope.update(item);
        } else {
            $scope.create(item);
        }
    }

    $scope.create = function(item) {
        new $scope.itemsResource(item).$create()
        .then(function(newItem) {
            $scope.items.push(newItem);
            $location.path('/117 REST Routing/table');
        })
    }

    $scope.update = function(item) {
        item.$update(function(response) {
            Object.keys($scope.items).forEach(i => {
                if($scope.items[i].id === response.id) {
                    $scope.items[i] = response;
                }
            });
        });

        $location.path('/117 REST Routing/table');
    }

    $scope.delete = function(item) {
        item.$delete().then(function() {
            $scope.items.splice($scope.items.indexOf(item), 1);
        });
    }

    $scope.refresh();
});