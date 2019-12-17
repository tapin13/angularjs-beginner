angular.module("App").directive("threeButton", function() {
    return {
        scope: { counter: "=counter" },
        link: function(scope, element, attributes) {
            element.on("click", function(event) {
                console.log("Button click: " + event.target.innerText);
                scope.$apply(function() {
                    scope.counter++;
                });
            })
        }
    }
});