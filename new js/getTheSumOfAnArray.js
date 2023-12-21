function getTheSumOfAnArray(array) {
	result = 0;
	for (let i = 0; i < array.length; i++) {
		result = result + array[i];
	}
	// return result;
	console.log(result);
} 

let numbers = [12, 23, 23, 354, 13, 35, 23, 354, 354];
getTheSumOfAnArray(numbers);
