function isOddOrEven(value) {
	if (value % 2 === 0) {
		let result = 'The number ' + value + ' is a even number';
		return result;
	} else {
		let result = 'The number ' + value + ' is a odd number';
		return result;
	}
}
let checkNum = isOddOrEven(1836);
console.log(checkNum);
