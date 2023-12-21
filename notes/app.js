let person = {
	name: 'John',
	age: 21,
	height: "5'9"
};

console.log(person);
console.log(person.name);
console.log(person['age']);
console.log(person.height);

let allKeys = Object.keys(person);
console.log(allKeys);
let allValues = Object.values(person);
console.log(allValues);


