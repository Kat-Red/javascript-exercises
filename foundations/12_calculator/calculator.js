const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++)
		result += arr[i];
	return result;
};

const multiply = function(arr) {
		let result = 1;
	for (let i = 0; i < arr.length; i++)
		result *= arr[i];
	return result;

};

const power = function(b, e) {
	return b**e;
	
};

const factorial = function(n) {
	if (n<=1)
		return 1;
	else return (n*factorial(n-1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
