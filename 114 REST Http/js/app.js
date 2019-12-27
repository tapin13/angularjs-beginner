const app = angular.module("App", []);

app.constant("baseUrl", "http://angularjs.local/items/")

app.controller("myCtrl", function($scope, $http, baseUrl) {
    $scope.currentView = 'table';

    $scope.items = [];

    $scope.refresh = function() {
        $scope.items = [];
        
        $http.get(baseUrl).then(function(response) {
            $scope.items = response.data;
        })
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
        $http.post(baseUrl, item).then(function(response) {
            $scope.items.push(response.data);
            $scope.currentView = 'table';
        })
    }

    $scope.update = function(item) {
        $http({
            url: baseUrl + item.id,
            method: "PUT",
            data: item
        }).then(function(response) {
            Object.keys($scope.items).forEach(i => {
                if($scope.items[i].id === response.data.id) {
                    $scope.items[i] = response.data;
                }
            });

            $scope.currentView = 'table';
        })
    }

    $scope.delete = function(item) {
        $http({
            url: baseUrl + item.id,
            method: "DELETE",
        }).then(function(response) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        })
    }

    $scope.refresh();
});