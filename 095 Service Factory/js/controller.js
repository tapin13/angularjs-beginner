angular.module("App").controller("myCtrl", function($scope, logService) {
    $scope.buttons = { 
        names: [ "Button #1", "Button #2", "Button #3" ],
        totalClicks: 0
    };

    $scope.$watch('buttons.totalClicks', function(newValue) {
        // console.log('Total clicks count: ' + newValue);
        logService.log('Total clicks count: ' + newValue);
    });
});