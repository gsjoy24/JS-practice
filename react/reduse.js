const nums = [12, 13, 32, 4, 123, 1, 13, 433];

const result = nums.reduce((sum, num) => sum + num, 0);

// console.log(result);

const joy = [
	{ name: 'Joy', bill: 12 },
	{ name: 'Fahad', bill: 42 },
	{ name: 'Ahad', bill: 14 },
	{ name: 'Lahad', bill: 62 }
];

const netBill = joy.reduce((total, person) => total + person.bill, 0);
console.log(netBill);
