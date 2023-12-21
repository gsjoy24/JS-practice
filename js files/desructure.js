let person = {
	name: 'John',
	age: 12,
	job: 'student',
	location: 'New York',
	phone: 12345,
	email: 'mail.com'
};

let { name, age, email } = person; // curly brackets required for objects.
console.log(person);
console.log(name, age, email);

let friends = ['Ali', 'John', 'Apa', 'Fahad', 'Joy', 'Kanta', 'Arnob', 'Zihad'];

let [first, second, third, ...other] = friends; // third brackets required for arrey.
let all = other; //will return fahad to zihad.

console.log(other);
console.log(first, second);
