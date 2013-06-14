function Fibonacci() {
}

Fibonacci.prototype.calculate = function(n) {
	if (n < 0) {
		return undefined;
	}
	if (n === 0) { 
		return 0;
	}
	else if (n === 1) {
		return 1;
	}
	else {
		return this.calculate(n - 1) + this.calculate(n - 2)
	}
};