//with for loop and function

function factorial(n) {
	let factorial = 1;
	for (let i = 1; i <= n; i++) {
		factorial = factorial * i;
	}
	return factorial;
}
let check = factorial(10);
console.log(check);

//with while loop
let factorial = 1;
let i = 1;
while (i < 20) {
	factorial = factorial * i;
	i++;
	console.log(i, factorial);
}
