const fibonacci = function(n) {
	if (n > 0){
		let  fib = 1;
		let prev = 0;
		for (let i = 2; i<=n; i++){
			let temp = fib;
			fib += prev;
			prev = temp;
		}
		return fib;
	}
	else if (n == 0)
		return 0;
	else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
