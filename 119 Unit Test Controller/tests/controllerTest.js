describe("Controller test", function() {
    // arrange
    let mockScope = {};
    let controller;

    beforeEach(function() {
        angular.mock.module("App");
    });

    beforeEach(angular.mock.inject(function($controller, $rootScope) {
        mockScope = $rootScope.$new();

        controller = $controller("myCtrl", {
            $scope: mockScope
        });
    }));

    // act
    it("create variable counter", function() {
        expect(mockScope.counter).toEqual(0);
    });

    it("increment counter", function() {
        mockScope.incrementCounter();
        mockScope.incrementCounter();

        expect(mockScope.counter).toEqual(2);
    });

});