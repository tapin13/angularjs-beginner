const app = angular.module("App", [ "ngResource" ]);

app.constant("baseUrl", "http://angularjs.local/items/")

app.controller("myCtrl", function($scope, $http, $resource, baseUrl) {
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
        $scope.currentView = 'edit';
    }

    $scope.cancel =  function() {
        $scope.currentView = 'table';
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
            $scope.currentView = 'table';
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

        $scope.currentView = 'table';
    }

    $scope.delete = function(item) {
        item.$delete().then(function() {
            $scope.items.splice($scope.items.indexOf(item), 1);
        });
    }

    $scope.refresh();
});