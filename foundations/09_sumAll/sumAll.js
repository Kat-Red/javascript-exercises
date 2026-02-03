const sumAll = function(n1, n2) {
	if ((Number.isInteger(n1) && Number.isInteger(n2)) && n1 > 0 && n2>0){
		let sum = 0;
		if (n1 < n2){
			for (let i = n1; i <= n2; i++)		
				{sum +=i;}
		}
		else{
		console.log("else") 
			for (let i = n1; i >= n2; i--)
				{sum +=i;}
		}
		return sum;
	}
	else return "ERROR";
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;