const pageApp = angular.module('App', []);

pageApp.directive("manufactureDirective", function() {
    return {
        link: function(scope, element, attributes) {
            const data = scope[attributes["manufactureDirective"]];
            const expression = attributes["property"] || "price | currency";

            if(angular.isArray(data)) {
                let htmlBodyElement = angular.element('<ul>');

                element.append(htmlBodyElement);

                data.map(item => {
                    let htmlItem = angular.element('<li>').text(scope.$eval(expression, item));
                    htmlBodyElement.append(htmlItem);
                });
            }
        },
        restrict: "EACM"
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