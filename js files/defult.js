function add(num1, num2 = 1) {
	// TODO: num2's default value is 1
	// TODO: there is no need or neccessary to apply a new value on function callback.
	return num1 + num2;
}

let total = add(10, 23);
let total2 = add(10);
console.log(total);
console.log(total2);
