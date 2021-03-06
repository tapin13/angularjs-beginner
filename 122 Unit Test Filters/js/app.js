const app = angular.module("App", [ ]);

app.filter("changeCase", function() {
    return function(value, toUpper) {
        if(angular.isString(value)) {
            let processedValue = toUpper ? value.toUpperCase() : value.toLowerCase();
            return processedValue;
        } else {
            return value;
        }
    }
})