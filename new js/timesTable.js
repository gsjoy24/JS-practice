function timesTable(num) {
	result = [];
	for (let i = 1; i <= 10; i++) {
		let sum = num * i;
		result.push(sum);
	}
	return result;
}

let timesTable1 = timesTable(24);
console.log(timesTable1);
