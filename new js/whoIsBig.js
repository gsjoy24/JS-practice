function whoIsBiggest(first, second) {
	if (first.length > second.length) {
		return first.split('').reverse().join('');
	} else {
		return second.split('').reverse().join('');
	}
}

let names = whoIsBiggest('Gour', 'Joy');
console.log(names);
