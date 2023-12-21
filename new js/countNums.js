function count(arr) {
	output = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 5) {
			output.push(arr[i]);
		}
	}
	return output.length;
}

let input = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
let result = count(input);
console.log(result);
