fetch('https://randomuser.me/api')
	.then((res) => res.json())
	.then((data) => {
		const user = data.results[0];
		const gen = user.gender;
		console.log(gen);
	});
