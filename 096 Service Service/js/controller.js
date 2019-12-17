angular.module("App").controller("myCtrl", function($scope, logService, errorService) {
    $scope.buttons = { 
        names: [ "Button #1", "Button #2", "Button #3" ],
        totalClicks: 0
    };

    $scope.$watch('buttons.totalClicks', function(newValue) {
        if(newValue < 5) {
            logService.log('Total clicks count: ' + newValue);
        } else {
            errorService.log('Total clicks count: ' + newValue);
        }
    });
});