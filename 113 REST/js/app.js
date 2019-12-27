const app = angular.module("App", []);

app.controller("myCtrl", function($scope) {
    $scope.currentView = 'table';

    $scope.items = [];

    $scope.refresh = function() {
        $scope.items = [];
        $scope.items.push({ id: 0, name: "item 1", price: 12 });
        $scope.items.push({ id: 1, name: "item 2", price: 22 });
        $scope.items.push({ id: 2, name: "item 3", price: 32 });
    }

    $scope.edit =  function(item) {
        $scope.currentItem = item ? angular.copy(item): {};
        $scope.currentView = 'edit';
    }

    $scope.save =  function(item) {
        if(angular.isDefined(item.id)) {
            $scope.update(item);
        } else {
            $scope.create(item);
        }
    }

    $scope.create = function(item) {
        $scope.items.push(item);
        $scope.currentView = 'table';
    }

    $scope.update = function(item) {
        Object.keys($scope.items).forEach(i => {
            if($scope.items[i].id === item.id) {
                $scope.items[i] = item;
            }
        });
        $scope.currentView = 'table';
    }

    $scope.delete = function(item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
    }

    $scope.refresh();
});