const repeatString = function(str, n) {
	if(n<0)return "ERROR";
	let repeated = "";
	for(let i = 0; i<n; i++)
		repeated+=str;
	return repeated;
};
repeatString('hello', 3);

// Do not edit below this line
module.exports = repeatString;
