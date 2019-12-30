describe("Timer test", function() {
    // arrange
    let mockScope = {};
    let controller;
    let mockInterval;
    let mockTimeout;

    beforeEach(angular.mock.module("App"));

    beforeEach(angular.mock.inject(function($controller, $rootScope, $interval, $timeout) {
        mockScope = $rootScope.$new();
        mockInterval = $interval;
        mockTimeout = $timeout;

        controller = $controller("myCtrl", {
            $scope: mockScope,
            $interval: mockInterval,
            $timeout: mockTimeout
        });
    }));

    // act
    it("limit update to 10", function() {
        for(let i = 0; i < 10; i++) {
            mockInterval.flush(5000);
        }
        expect(mockScope.intervalCounter).toEqual(10);
    });

    it("timer changes", function() {
        mockTimeout.flush(3000);
        // expect(mockScope.timeoutCounter).toEqual(1); // fail
        mockTimeout.flush(2000);
        expect(mockScope.timeoutCounter).toEqual(1);
    });

});