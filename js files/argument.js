function getFullName(firstName, lastName) {
	let fullName = '';
	for (let i = 0; i < arguments.length; i++) {
		let name = arguments[i];
		fullName = fullName + ' ' + name;
	}
	return fullName;
}

let fullName = getFullName('Gour', 'Saha', 'Joy', 'sumi', 'apa', 'picchu');
console.log(fullName);
