function count() {
	console.log('do something');
}
setTimeout(count); // TODO: this will exicute at the end.
setTimeout(count, 2000); // TODO: this will exicute at the end plus after 2 second later.
console.log('KK');
console.log('FF');

setInterval(count, 1000); // TODO: this will exicute like a loop after every second.