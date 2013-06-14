describe("Fibonacci", function() {
	var fibonacci = new Fibonacci();

  	it("should be 0 when passed a 0", function() {
    	expect(fibonacci.calculate(0)).toBe(0);
  	});

  	it("should be 1 when passed a 1", function() {
  		expect(fibonacci.calculate(1)).toBe(1);
  	});

  	it("should be 8 when passed a 6", function() {
  		expect(fibonacci.calculate(6)).toBe(8);
  	});

    it("should be undefined when passed a negative number", function() {
      expect(fibonacci.calculate(-1)).toBeUndefined();
    });
});

