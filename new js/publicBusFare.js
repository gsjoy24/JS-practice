/*
50
55
112
235
365

0
1250
250
500
1000
*/
function publicBusFare(participants) {
	let remaining = participants % 50;
	remaining = remaining % 11;
	const totalCost = remaining * 250;
	return totalCost;
}
let cost = publicBusFare(231);
console.log(cost);
