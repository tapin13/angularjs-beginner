describe("HTTP test", function() {
    // arrange
    let mockScope = {};
    let controller;
    let backend;

    beforeEach(angular.mock.module("App"));

    beforeEach(angular.mock.inject(function($httpBackend) {
        backend = $httpBackend;

        backend.expect("GET", "productData.json").respond([
            { "id": 55, "name": "item 55" },
            { "id": 57, "name": "item 57" },
            { "id": 59, "name": "item 59" }
        ]);
    }));

    beforeEach(angular.mock.inject(function($controller, $rootScope, $http) {
        mockScope = $rootScope.$new();

        controller = $controller("myCtrl", {
            $scope: mockScope,
            $http: $http
        });

        backend.flush();
    }));

    // act
    it("ajax reqest", function() {
        backend.verifyNoOutstandingExpectation();
    });

    it("data processing", function() {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(3);
    });

    it("data check", function() {
        expect(mockScope.products[0].name).toEqual("item 55");
        expect(mockScope.products[1].name).toEqual("item 57");
        expect(mockScope.products[2].name).toEqual("item 59");
    });

});