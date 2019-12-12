const pageApp = angular.module('App', []);

pageApp.directive("manufactureDirective", function() {
    return {
        link: function(scope, element, attributes) {
            const data = scope[attributes["manufactureDirective"]];
        },
        template: "<ol><li ng-repeat='item in data'>{{item.model}}</li></ol>",
        restrict: "A"
        // E - element
        // A - attribute
        // C - class
        // M - comment
    }
});

pageApp.controller("Business", function($scope) {
    $scope.data = [ 
        { model: "Mazda 2", price: 40 },
        { model: "Honda Civic", price: 50 },
        { model: "Toyota Corolla", price: 62 },
        { model: "Ford Fiesta", price: 12 },
    ]
});