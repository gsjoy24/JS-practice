function isLeapYear(year) {
	if (year % 4 === 0) {
		result = 'the year ' + year + ' is a leap year';
		return result;
	} else {
		result = 'the year ' + year + ' is not a leap year';
		return result;
	}
}
let checkYear = isLeapYear(2045);
console.log(checkYear);
