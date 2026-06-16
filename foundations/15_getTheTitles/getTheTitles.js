const getTheTitles = function(books) {
	let titles = [];
	books.map(i=> titles.push(i.title))
	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
