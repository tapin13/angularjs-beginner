describe("First simple test", function() {
    // arrange
    let value;

    beforeEach(function() {
        value = 0;
    });

    // act
    it("increment value", function() {
        value++;

        expect(value).toEqual(1);
    })

    it("decrement value", function() {
        value--;

        expect(value).toEqual(-1);
        // expect(value).toEqual(0);
    })
});