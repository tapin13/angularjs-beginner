const app = angular.module("App", [ ]);

app.controller("myCtrl", function($scope) {
    $scope.items = [
        { "name": "vasia" },
        { "name": "petia" },
        { "name": "denia" }
    ];
});

app.directive("orderedList", function() {
    return function(scope, element, attributes) {
        let attributeValues = attributes["orderedList"];
        let data = scope[attributeValues];

        if(angular.isArray(data)) {
            let e = angular.element("<ol>");
            element.append(e);

            for(let i = 0; i < data.length; i++) {
                e.append(angular.element('<li>').text(data[i].name));
            }
        }
    }
})