let actorName = 'Joy';

function welcomeMessage(name, message) {
	message(name);
}

function greetingMorning(name) {
	console.log('Good Morning', name);
}

// function greetingEvening(name) {
// 	console.log('Good Evening', name);
// }

//TODO: this is a exmple of arrow function
const greetingEvening = (name) => console.log('Good Evening', name);

function greetingNight(name) {
	console.log('Good Night', name);
}

welcomeMessage(actorName, greetingEvening);
