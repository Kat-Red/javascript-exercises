const palindromes = function (str) {
	const onlyAlph= str.split('').filter((i)=>{
		if ((i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) || (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) || (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57)){
			return true;
		}
	}).join('').toLowerCase();

	const reversed = onlyAlph.split('').reverse().join('');
	return reversed == onlyAlph;
};
// ZZZZ car, a man, a maracaz.
// Do not edit below this line
module.exports = palindromes;
