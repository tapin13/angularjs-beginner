const pageApp = angular.module('App', []);

pageApp.directive("manufactureDirective", function() {
    return {
        link: function(scope, element, attributes) {
            const data = scope[attributes["manufactureDirective"]];
        },
        templateUrl: function(element, attributes) {
            return (attributes['template'] == "table" ? "./templates/table.html" : "./templates/list.html");
        },
        restrict: "A"
        // E - element
        // A - attribute
        // C - class
        // M - comment
        , replace: true
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