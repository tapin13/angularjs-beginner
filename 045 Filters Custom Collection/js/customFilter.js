angular.module("App")
.filter("changeCase", function() {
    return function(value, toUpper) {
        if(angular.isString(value)) {
            let processedValue = toUpper ? value.toUpperCase(): value.toLowerCase();
            return processedValue;
        } else {
            return value;
        }
    }
})
.filter("skipItems", function() {
    return function(itemsArray, count) {
        if(angular.isArray(itemsArray) && angular.isNumber(count)) {
            if(count > itemsArray.length || count < 1) {
                return itemsArray;    
            } else {
                return itemsArray.slice(count);
            }
        } else {
            return itemsArray;
        }
    }
})
.filter("take", function($filter) {
    return function(data, from, to) {
        const arr = $filter("skipItems")(data, from);
        return $filter("limitTo")(arr, to);
    }
})
;