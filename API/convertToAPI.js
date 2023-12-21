const user = {
	id: 12,
	name: 'joy',
	friends: ['kamal', 'jamal'],
	girlfriend: {
		name: 'Bilai',
		age: 18,
		from: 'Rajshahi'
	}
};
const userJson = JSON.stringify(user); // TODO: it will convert a object to a JSON sring.
console.log(userJson);

const userSring = JSON.parse(userJson);
console.log(userSring); // TODO: it will convert a JSON sring to a object.
