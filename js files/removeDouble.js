let numbers = [17, 2, 3, 5, 2, 6, 4, 6, 3, 5, 9];
let mains = [];

for (let i = 0; i < numbers.length; i++) {
	let e = numbers[i];
	let index = mains.indexOf(e);
	if (index == -1) {
		mains.push(e);
	}
}
console.log(mains);
