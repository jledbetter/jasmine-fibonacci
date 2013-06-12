describe("Fibonacci", function() {
	var fibonacci = new Fibonacci();

  	it("should return a 0 with 0", function() {
    	expect(fibonacci.calculate(0)).toBe(0);
  	});

  	it("should return a 1 with 1", function() {
  		expect(fibonacci.calculate(1)).toBe(1);
  	});

  	it("should return a 8 with 6", function() {
  		expect(fibonacci.calculate(6)).toBe(8);
  	});
});

