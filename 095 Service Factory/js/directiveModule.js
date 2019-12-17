angular.module("directiveModule", ["logService"]).directive("threeButton", function(logService) {
    return {
        scope: { counter: "=counter" },
        link: function(scope, element, attributes) {
            element.on("click", function(event) {
                // console.log("Button click: " + event.target.innerText);
                logService.log("Button click: " + event.target.innerText);
                scope.$apply(function() {
                    scope.counter++;
                });
            })
        }
    }
});