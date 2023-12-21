// ! get the odd numbers
function getTheOddNumbers(array) {
	let numbers = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			numbers.push(array[i]);
		}
	}
	return numbers;
}

function getTheSumOfAnArray(array) {
	result = 0;
	for (let i = 0; i < array.length; i++) {
		result = result + array[i];
	}
	return result;
	// console.log(result);
}
let numbers = [12, 23, 23, 354, 13, 35, 23, 354, 353];
let theOddNums = getTheOddNumbers(numbers);
console.log(theOddNums);

let theFinalResult = getTheSumOfAnArray(theOddNums);
console.log(theFinalResult);