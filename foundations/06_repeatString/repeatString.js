const repeatString = function(string, n) {
	let repeated = '';
	if(n >= 0){
		for (let i = 0; i < n; i++)
		{
			repeated += string;
		}
		return repeated;
	}
	else 
		return "ERROR";
};
repeatString('hello', 3)

// Do not edit below this line
module.exports = repeatString;
