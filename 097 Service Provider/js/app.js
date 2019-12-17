const app = angular.module("App", ["directiveModule", "customServices"]);

app.config(function(logServiceProvider) {
    logServiceProvider.debugEnabled(true).messageCounterEnabled(true);
})