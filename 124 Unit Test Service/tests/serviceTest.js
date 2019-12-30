describe("Service test", function() {
    // arrange
    beforeEach(angular.mock.module("App"));

    // act
    it("use service", function() {
        angular.mock.inject(function(counterService) {
            expect(counterService.getCounter()).toEqual(0);
            counterService.increment();
            counterService.increment();
            expect(counterService.getCounter()).toEqual(2);
            counterService.increment();
            expect(counterService.getCounter()).toEqual(3);
        });
    });

});