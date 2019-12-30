describe("Directive test", function() {
    // arrange
    let mockScope;
    let compileService;

    beforeEach(angular.mock.module("App"));

    beforeEach(angular.mock.inject(function($rootScope, $compile) {
        mockScope = $rootScope.$new();
        compileService = $compile;

        mockScope.data = [
            { "name": "go" },
            { "name": "lo" },
            { "name": "mo" }
        ];
    }));

    // act
    it("list", function() {
        let compileFn = compileService("<div ordered-list='data'></div>");
        let elem = compileFn(mockScope);

        expect(elem.find("ol").length).toEqual(1);
        expect(elem.find("li").length).toEqual(3);
        expect(elem.find("li").eq(0).text()).toEqual('go');
        expect(elem.find("li").eq(1).text()).toEqual('lo');
        expect(elem.find("li").eq(2).text()).toEqual('mo');
    });

});