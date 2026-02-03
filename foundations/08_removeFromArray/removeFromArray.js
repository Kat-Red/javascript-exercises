const removeFromArray = function(arr, n, n2=NaN, n3=NaN, n4=NaN) {
	let newArray = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] !== n && arr[i] !== n2 && arr[i] !== n3 && arr[i] !== n4){
			newArray.push(arr[i]);
		}
	}
	return newArray;
};


removeFromArray([1,4,6,8,0], 0);
// Do not edit below this line
module.exports = removeFromArray;
