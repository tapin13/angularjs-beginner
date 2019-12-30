describe("Filter test", function() {
    // arrange
    let filter;

    beforeEach(angular.mock.module("App"));

    beforeEach(angular.mock.inject(function($filter) {
        filter = $filter("changeCase");
    }));

    // act
    it("to lower case", function() {
        expect(filter("Hello World")).toEqual("hello world");
    });

    it("to upper case", function() {
        expect(filter("Hello World", true)).toEqual("HELLO WORLD");
    });

});