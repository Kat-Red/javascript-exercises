const findTheOldest = function(people) {
	const oldest = people.sort((a,b)=> {
		let livedA;
		if ("yearOfDeath" in a)
			livedA = a.yearOfDeath - a.yearOfBirth
		else livedA = (new Date()).getFullYear() - a.yearOfBirth;
		let livedB;
		if ("yearOfDeath" in b)
			livedB = b.yearOfDeath - b.yearOfBirth
		else livedB = (new Date()).getFullYear() - b.yearOfBirth;
		return livedB-livedA;
	});
	return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
