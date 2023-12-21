let num = [22, 43, 12, 63, 65, 20, 33, 99, 64, 27, 87, 55, 22];
let max = num[0];

for (let i = 0; i < num.length; i++) {
	let e = num[i];
	if (e > max) {
		max = e;
	}
}

console.log(max);
